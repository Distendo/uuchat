local TextChatService = game:GetService("TextChatService")
local Players = game:GetService("Players")

local LocalPlayer = Players.LocalPlayer

-- 1. Atbash Cipher Transformation (a <-> z, A <-> Z)
local function atbashCipher(text)
	return text:gsub("%a", function(c)
		local ascii = string.byte(c)
		-- Lowercase (a-z)
		if ascii >= 97 and ascii <= 122 then
			return string.char(219 - ascii)
		-- Uppercase (A-Z)
		elseif ascii >= 65 and ascii <= 90 then
			return string.char(155 - ascii)
		end
		return c
	end)
end

-- 2. Create GUI
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "AtbashChatGui"
screenGui.ResetOnSpawn = false
screenGui.Parent = LocalPlayer:WaitForChild("PlayerGui")

local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 300, 0, 85)
frame.Position = UDim2.new(0.5, -150, 0.9, -42)
frame.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
frame.BorderSizePixel = 0
frame.Parent = screenGui

local titleLabel = Instance.new("TextLabel")
titleLabel.Name = "TitleLabel"
titleLabel.Size = UDim2.new(1, 0, 0, 34)
titleLabel.Position = UDim2.new(0, 0, 0, 2)
titleLabel.BackgroundTransparency = 1
titleLabel.Text = "UUChat"
titleLabel.Font = Enum.Font.SourceSansItalic
titleLabel.TextSize = 32
titleLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
titleLabel.TextXAlignment = Enum.TextXAlignment.Center
titleLabel.Parent = frame

local creditLabel = Instance.new("TextLabel")
creditLabel.Name = "CreditLabel"
creditLabel.Size = UDim2.new(0.35, 0, 0, 16)
creditLabel.Position = UDim2.new(0.63, 0, 0, 24)
creditLabel.BackgroundTransparency = 1
creditLabel.Text = "made by uushshsh_78"
creditLabel.Font = Enum.Font.SourceSans
creditLabel.TextSize = 11
creditLabel.TextColor3 = Color3.fromRGB(150, 150, 150)
creditLabel.TextXAlignment = Enum.TextXAlignment.Right
creditLabel.Parent = frame

local textBox = Instance.new("TextBox")
textBox.Size = UDim2.new(0.73, -5, 0.42, 0)
textBox.Position = UDim2.new(0.02, 0, 0.48, 0)
textBox.PlaceholderText = "Type message..."
textBox.Text = ""
textBox.TextSize = 14
textBox.BackgroundColor3 = Color3.fromRGB(45, 45, 45)
textBox.TextColor3 = Color3.fromRGB(255, 255, 255)
textBox.Parent = frame

local sendButton = Instance.new("TextButton")
sendButton.Size = UDim2.new(0.22, 0, 0.42, 0)
sendButton.Position = UDim2.new(0.76, 0, 0.48, 0)
sendButton.Text = "Send"
sendButton.TextSize = 14
sendButton.BackgroundColor3 = Color3.fromRGB(60, 120, 210)
sendButton.TextColor3 = Color3.fromRGB(255, 255, 255)
sendButton.Parent = frame

-- 3. Outgoing Sender Logic
local function sendMessage()
	local rawInput = textBox.Text
	if rawInput ~= "" then
		local textChannels = TextChatService:WaitForChild("TextChannels", 5)
		if textChannels then
			local generalChannel = textChannels:FindFirstChild("RBXGeneral")
			if generalChannel then
				local encryptedText = atbashCipher(rawInput)
				generalChannel:SendAsync("0" .. encryptedText)
			end
		end
		textBox.Text = ""
	end
end

sendButton.MouseButton1Click:Connect(sendMessage)
textBox.FocusLost:Connect(function(enterPressed)
	if enterPressed then
		sendMessage()
	end
end)

-- 4. Correct TextChatService Replacer Callback
TextChatService.OnIncomingMessage = function(textChatMessage)
	local rawText = textChatMessage.Text
	
	-- Check if message starts with '0'
	if rawText and string.sub(rawText, 1, 1) == "0" then
		local properties = Instance.new("TextChatMessageProperties")
		
		-- Extract and decrypt body
		local encodedBody = string.sub(rawText, 2)
		local decodedBody = atbashCipher(encodedBody)
		
		-- Replace the text for the local chat window log
		properties.Text = decodedBody
		
		return properties
	else
		-- Hide non-'0' messages from the standard chat view
		local properties = Instance.new("TextChatMessageProperties")
		properties.Text = ""
		return properties
	end
end
