-- ▗▖ ▗▖▗▖ ▗▖▗▖ ▗▖▗▄▄▖  ▗▄▖  ▗▄▖▗▄▄▄▖
-- ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌ █  
-- ▐▛▀▜▌▐▌ ▐▌▐▌ ▐▌▐▛▀▚▖▐▌ ▐▌▐▌ ▐▌ █  
-- ▐▌ ▐▌▝▚▄▞▘▝▚▄▞▘▐▙▄▞▘▝▚▄▞▘▝▚▄▞▘ █  
-- made by distendo/uu
-- hUUboot v2 - Improved loader & transpiler

local HttpService = game:GetService("HttpService")
local PAYLOAD_URL = "https://raw.githubusercontent.com/Distendo/uuchat/refs/heads/main/main.ts"
local MAX_RETRIES = 2
local RETRY_DELAY = 1.5

local TSInterpreter = {}

function TSInterpreter.lex(input: string)
	local tokens = {}
	local i = 1
	local len = #input
	while i <= len do
		local c = input:sub(i, i)

		-- Whitespace
		if c:match("%s") then
			i = i + 1

		-- Single-line comment
		elseif c == "/" and i < len and input:sub(i+1, i+1) == "/" then
			local start = i
			i = i + 2
			while i <= len and input:sub(i, i) ~= "\n" do
				i = i + 1
			end
			table.insert(tokens, {type = "Comment", value = input:sub(start, i - 1)})

		-- Multi-line comment
		elseif c == "/" and i < len and input:sub(i+1, i+1) == "*" then
			local start = i
			i = i + 2
			while i <= len - 1 and not (input:sub(i, i) == "*" and input:sub(i+1, i+1) == "/") do
				i = i + 1
			end
			i = i + 2
			table.insert(tokens, {type = "Comment", value = input:sub(start, i - 1)})

		-- Template literal backtick (skip entire thing)
		elseif c == "`" then
			local start = i
			i = i + 1
			while i <= len and input:sub(i, i) ~= "`" do
				if input:sub(i, i) == "\\" then i = i + 1 end -- skip escaped chars
				i = i + 1
			end
			i = i + 1
			table.insert(tokens, {type = "String", value = input:sub(start, i - 1)})

		-- Identifiers & Keywords
		elseif c:match("%a") or c == "_" then
			local start = i
			while i <= len and (input:sub(i, i):match("[%w_]") or input:sub(i, i) == "_") do
				i = i + 1
			end
			local word = input:sub(start, i - 1)
			local keywords = {
				["let"] = true, ["const"] = true, ["var"] = true,
				["function"] = true, ["return"] = true, ["if"] = true,
				["else"] = true, ["for"] = true, ["while"] = true,
				["do"] = true, ["break"] = true, ["continue"] = true,
				["new"] = true, ["this"] = true, ["class"] = true,
				["extends"] = true, ["import"] = true, ["export"] = true,
				["from"] = true, ["as"] = true, ["type"] = true,
				["interface"] = true, ["enum"] = true, ["typeof"] = true,
				["instanceof"] = true, ["void"] = true, ["null"] = true,
				["undefined"] = true, ["true"] = true, ["false"] = true,
				["print"] = true, ["warn"] = true, ["error"] = true,
				["pcall"] = true, ["spawn"] = true, ["task"] = true,
				["typeof"] = true, ["typeIs"] = true,
			}
			local tokenType = keywords[word] and "Keyword" or "Identifier"
			table.insert(tokens, {type = tokenType, value = word})

		-- Numbers
		elseif c:match("%d") then
			local start = i
			while i <= len and input:sub(i, i):match("[%d%.]") do
				i = i + 1
			end
			table.insert(tokens, {type = "Number", value = tonumber(input:sub(start, i - 1))})

		-- Strings (single, double)
		elseif c == '"' or c == "'" then
			local quote = c
			local start = i
			i = i + 1
			while i <= len do
				local ch = input:sub(i, i)
				if ch == "\\" then
					i = i + 2 -- skip escaped char
				elseif ch == quote then
					i = i + 1
					break
				else
					i = i + 1
				end
			end
			table.insert(tokens, {type = "String", value = input:sub(start, i - 1)})

		-- Punctuation
		else
			if string.find(":=;()+{}<>[],.-!?&|:^~%", c, 1, true) then
				table.insert(tokens, {type = "Punctuator", value = c})
			end
			i = i + 1
		end
	end
	return tokens
end

function TSInterpreter.process(source: string)
	-- 1. Validate scriptVersion watermark
	local tokens = TSInterpreter.lex(source)
	local versionMatch = nil
	for _, tok in ipairs(tokens) do
		if tok.type == "Comment" then
			local match = tok.value:match('scriptVersion%s*=%s*["\'](v%d+)["\']')
			if match then
				versionMatch = match
				break
			end
		end
	end

	if not versionMatch then
		versionMatch = source:match('/%*.-scriptVersion%s*=%s*["\'](v%d+)["\'].-%*/')
	end
	if not versionMatch then
		versionMatch = source:match('//%s*scriptVersion%s*=%s*["\'](v%d+)["\']')
	end

	if not versionMatch then
		return nil, nil, "Required 'scriptVersion' comment watermark not found."
	end

	-- 2. Strip TypeScript constructs
	local code = source

	-- Remove scriptVersion watermark comments
	code = code:gsub("/%*.-scriptVersion%s*=%s*["\'](v[%d]+)["\'].-%*/", "")
	code = code:gsub("//%s*scriptVersion%s*=%s*["\'](v[%d]+)["\']", "")

	-- Remove interface blocks
	code = code:gsub("interface%s+%w+%s*%-?%s*{[^}]*}", "")

	-- Remove type aliases
	code = code:gsub("type%s+%w+%s*=%s*[^;]+;", "")

	-- Remove type assertions (as Type)
	code = code:gsub("as%s+[%w_<>%[%]]+", "")

	-- Remove export keyword
	code = code:gsub("export%s+", "")

	-- Remove import statements
	code = code:gsub("import%s+.-%s+from%s+[\"'].-[\"']%s*;?", "")
	code = code:gsub("import%s*%(", "") -- import() calls

	-- Convert let/const/var to local
	code = code:gsub("let%s+", "local ")
	code = code:gsub("const%s+", "local ")
	code = code:gsub("var%s+", "local ")

	-- Remove TypeScript type annotations on variables
	-- : Type =  →  =
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*=)", "%2")
	-- : Type,  →  ,
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*,)", "%2")
	-- : Type)  →  )
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*[%)])", "%2")
	-- : Type;  →  ;
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*;)", "%2")
	-- : Type\n  →  \n
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*\n)", "%2")

	-- Remove arrow function return types  ): Type =>
	code = code:gsub("%)%s*:%s*[%w_<>%[%]]+%s*=>", ") =>")

	-- Remove generic parameters  <Type>
	code = code:gsub("<%s*[%w_, ]+%s*>", "")

	-- Remove readonly
	code = code:gsub("readonly%s+", "")

	-- Remove decorators @Something(...)
	code = code:gsub("@%w+%s*%([^%)]*%)", "")
	code = code:gsub("@%w+", "")

	-- Convert template literals to string concatenation
	-- `text ${expr}`  →  "text " .. tostring(expr)
	-- This is handled by the backtick lexer, but simple cases:
	code = code:gsub('`([^`]*)`', '"%1"')

	-- Remove triple-slash comments
	code = code:gsub("///[^\n]*", "")

	return code, versionMatch, nil
end

local function applySyntaxFallbacks(code: string)
	local fixed = code
	-- Remove any remaining decorator syntax
	fixed = fixed:gsub("@%w+%s*%([^%)]*%)", "")
	fixed = fixed:gsub("@%w+", "")
	-- Remove generics
	fixed = fixed:gsub("<%s*[%w_]+%s*>", "")
	-- Remove readonly
	fixed = fixed:gsub("readonly%s+", "")
	-- Remove 'as' casts
	fixed = fixed:gsub("as%s+[%w_<>]+", "")
	return fixed
end

local function fetchWithRetry(url: string): (boolean, string?)
	for attempt = 1, MAX_RETRIES do
		local success, result = pcall(function()
			return game:HttpGet(url, true)
		end)
		if success and result and #result > 0 then
			return true, result
		end
		if attempt < MAX_RETRIES then
			warn(string.format("[hUUboot]: Fetch attempt %d failed, retrying in %.1fs...", attempt, RETRY_DELAY))
			task.wait(RETRY_DELAY)
		end
	end
	return false, nil
end

local function boot()
	print("hUUboot v2: Loading payload...")

	-- Fetch source
	local ok, source = fetchWithRetry(PAYLOAD_URL)
	if not ok or not source or #source == 0 then
		warn("[hUUboot]: Failed to fetch payload from GitHub after retries.")
		warn("[hUUboot]: Check your internet connection or the repository status.")
		return
	end

	print(string.format("[hUUboot]: Fetched %.1f KB of source", #source / 1024))

	-- Transpile
	local startTime = os.clock()
	local cleanCode, versionMatch, err = TSInterpreter.process(source)
	if not cleanCode then
		warn(string.format("[hUUboot]: Transpile failed: %s", tostring(err)))
		return
	end

	local elapsed = math.floor((os.clock() - startTime) * 1000)
	print(string.format("[hUUboot]: Transpiled in %dms (version: %s)", elapsed, tostring(versionMatch)))

	-- Compile
	local fn, loadError = loadstring(cleanCode)
	if not fn then
		-- Try fallback stripping
		local fallbackCode = applySyntaxFallbacks(cleanCode)
		local retryFn, retryError = loadstring(fallbackCode)
		if not retryFn then
			warn(string.format("[hUUboot]: Compile failed: %s", tostring(retryError)))
			warn("[hUUboot]: This may indicate a syntax issue in the source.")
			return
		end
		fn = retryFn
		warn("[hUUboot]: Compiled with syntax fallbacks applied")
	end

	-- Run with sandboxed environment
	local env = setmetatable({}, { __index = getfenv(fn) })
	setfenv(fn, env)

	local runOk, runErr = xpcall(fn, function(e)
		return debug.traceback(tostring(e), 2)
	end)

	if not runOk then
		warn(string.format("[hUUboot]: Runtime error:\n%s", tostring(runErr)))
	else
		print("[hUUboot]: Script executed successfully")
	end
end

task.spawn(boot)
