-- ▗▖ ▗▖▗▖ ▗▖▗▖ ▗▖▗▄▄▖  ▗▄▖  ▗▄▖▗▄▄▄▖
-- ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌ █  
-- ▐▛▀▜▌▐▌ ▐▌▐▌ ▐▌▐▛▀▚▖▐▌ ▐▌▐▌ ▐▌ █  
-- ▐▌ ▐▌▝▚▄▞▘▝▚▄▞▘▐▙▄▞▘▝▚▄▞▘▝▚▄▞▘ █  
-- made by distendo/uu                                  
                                  
                                  



local HttpService = game:GetService("HttpService")
local PAYLOAD_URL = "https://raw.githubusercontent.com/Distendo/uuchat/refs/heads/main/main.ts"

local TSInterpreter = {}

function TSInterpreter.lex(input: string)
	local tokens = {}
	local i = 1
	local len = #input
	while i <= len do
		local c = input:sub(i, i)
		if c:match("%s") then
			i = i + 1
		elseif c == "/" and input:sub(i+1, i+1) == "/" then
			local start = i
			while i <= len and input:sub(i, i) ~= "\n" do
				i = i + 1
			end
			table.insert(tokens, {type = "Comment", value = input:sub(start, i - 1)})
		elseif c == "/" and input:sub(i+1, i+1) == "*" then
			local start = i
			i = i + 2
			while i <= len and not (input:sub(i, i) == "*" and input:sub(i+1, i+1) == "/") do
				i = i + 1
			end
			i = i + 2
			table.insert(tokens, {type = "Comment", value = input:sub(start, i - 1)})
		elseif c:match("%a") or c == "_" then
			local start = i
			while i <= len and (input:sub(i, i):match("%w") or input:sub(i, i) == "_") do
				i = i + 1
			end
			local word = input:sub(start, i - 1)
			local tokenType = "Identifier"
			if word == "let" or word == "const" or word == "print" or word == "interface" or word == "type" then
				tokenType = "Keyword"
			end
			table.insert(tokens, {type = tokenType, value = word})
		elseif c:match("%d") then
			local start = i
			while i <= len and input:sub(i, i):match("%d") do
				i = i + 1
			end
			table.insert(tokens, {type = "Number", value = tonumber(input:sub(start, i - 1))})
		elseif c == '"' or c == "'" then
			local quote = c
			i = i + 1
			local start = i
			while i <= len and input:sub(i, i) ~= quote do
				i = i + 1
			end
			local val = input:sub(start, i - 1)
			i = i + 1
			table.insert(tokens, {type = "String", value = val})
		else
			if string.find(":=;()+{}<>[],.-*", c, 1, true) then
				table.insert(tokens, {type = "Punctuator", value = c})
			end
			i = i + 1
		end
	end
	return tokens
end

function TSInterpreter.process(source: string)
	local tokens = TSInterpreter.lex(source)
	local versionMatch = nil

	for _, tok in ipairs(tokens) do
		if tok.type == "Comment" then
			local match = tok.value:match('scriptVersion%s*=%s*["\'](v[12])["\']')
			if match then
				versionMatch = match
				break
			end
		end
	end

	if not versionMatch then
		versionMatch = source:match('/%*.-scriptVersion%s*=%s*["\'](v[12])["\'].-%*/')
	end

	if not versionMatch then
		return nil, nil, "Required 'scriptVersion' comment watermark not found."
	end

	local code = source
	code = code:gsub("interface%s+%w+%s*%-?%s*{.-}", "")
	code = code:gsub("type%s+%w+%s*=%s*[^;]+;", "")
	code = code:gsub("as%s+[%w_<>%[%]]+", "")
	code = code:gsub("export%s+", "")
	code = code:gsub("import%s+.-%s+from%s+[\"'].-[\"']%s*;?", "")
	code = code:gsub("let%s+", "local ")
	code = code:gsub("const%s+", "local ")
	
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*=)", "%2")
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*,)", "%2")
	code = code:gsub(":%s*([%w_<>%[%]]+)(%s*%)", "%2")

	return code, versionMatch, nil
end

local function applySyntaxFallbacks(code: string)
	local fixed = code:gsub("@%w+%s*%(.-%)", "")
	fixed = fixed:gsub("@%w+", "")
	fixed = fixed:gsub("<%s*[%w_]+%s*>", "")
	fixed = fixed:gsub("readonly%s+", "")
	return fixed
end

local function boot()
	print("hUUboot loaded. Loading the script...")
	
	local success, source = pcall(function()
		return game:HttpGet(PAYLOAD_URL)
	end)

	if not success or not source or #source == 0 then
		warn("[hUUboot]: Failed to fetch payload from GitHub. Script did not run.")
		return
	end

	local cleanCode, versionMatch, err = TSInterpreter.process(source)
	if not cleanCode then
		warn(string.format("[hUUboot]: Security validation failed: %s Script did not run.", tostring(err)))
		return
	end

	local fn, loadError = loadstring(cleanCode)
	
	if not fn then
		local fallbackCode = applySyntaxFallbacks(cleanCode)
		local retryFn, retryError = loadstring(fallbackCode)
		if not retryFn then
			warn(string.format("[hUUboot]: Fallback compilation failed: %s. Script did not run.", tostring(retryError)))
			return
		end
		fn = retryFn
	end

	local env = setmetatable({}, { __index = getfenv(fn) })
	setfenv(fn, env)

	local runSuccess, runError = xpcall(fn, function(e)
		return debug.traceback(tostring(e), 2)
	end)

	if not runSuccess then
		warn(string.format("[hUUboot]: Handled runtime exception:\n%s", tostring(runError)))
	end
end

task.spawn(boot)
