local TextChatService = game:GetService("TextChatService")
local UserInputService = game:GetService("UserInputService")
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

-- "UUChat" Title Label (Centered)
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

-- Credit Label ("made by uushshsh_78" in gray)
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

-- Input TextBox
local textBox = Instance.new("TextBox")
textBox.Size = UDim2.new(0.73, -5, 0.42, 0)
textBox.Position = UDim2.new(0.02, 0, 0.48, 0)
textBox.PlaceholderText = "Type message..."
textBox.Text = ""
textBox.TextSize = 14
textBox.BackgroundColor3 = Color3.fromRGB(45, 45, 45)
textBox.TextColor3 = Color3.fromRGB(255, 255, 255)
textBox.Parent = frame

-- Send Button
local sendButton = Instance.new("TextButton")
sendButton.Size = UDim2.new(0.22, 0, 0.42, 0)
sendButton.Position = UDim2.new(0.76, 0, 0.48, 0)
sendButton.Text = "Send"
sendButton.TextSize = 14
sendButton.BackgroundColor3 = Color3.fromRGB(60, 120, 210)
sendButton.TextColor3 = Color3.fromRGB(255, 255, 255)
sendButton.Parent = frame

-- 3. Dragging Logic
local dragging = false
local dragInput, dragStart, startPos

local function update(input)
	local delta = input.Position - dragStart
	frame.Position = UDim2.new(
		startPos.X.Scale, startPos.X.Offset + delta.X,
		startPos.Y.Scale, startPos.Y.Offset + delta.Y
	)
end

frame.InputBegan:Connect(function(input)
	if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
		dragging = true
		dragStart = input.Position
		startPos = frame.Position
		
		input.Changed:Connect(function()
			if input.UserInputState == Enum.UserInputState.End then
				dragging = false
			end
		end)
	end
end)

frame.InputChanged:Connect(function(input)
	if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
		dragInput = input
	end
end)

UserInputService.InputChanged:Connect(function(input)
	if input == dragInput and dragging then
		update(input)
	end
end)

-- 4. Outgoing Sender Logic
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

-- 5. TextChatService Replacer Listener
TextChatService.OnIncomingMessage = function(textChatMessage)
	local rawText = textChatMessage.Text
	
	if rawText and string.sub(rawText, 1, 1) == "0" then
		local properties = Instance.new("TextChatMessageProperties")
		local encodedBody = string.sub(rawText, 2)
		local decodedBody = atbashCipher(encodedBody)
		
		properties.Text = decodedBody
		return properties
	else
		local properties = Instance.new("TextChatMessageProperties")
		properties.Text = ""
		return properties
	end
end
