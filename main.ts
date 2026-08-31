import { Players, TweenService, UserInputService, SoundService, RunService, HttpService, Lighting, StarterGui } from "\x40\x72\x62\x78\x74\x73\x2f\x73\x65\x72\x76\x69\x63\x65\x73";



const LocalPlayer = Players.LocalPlayer;
const PlayerGui = LocalPlayer.WaitForChild("\x50\x6c\x61\x79\x65\x72\x47\x75\x69") as PlayerGui;

if (PlayerGui.FindFirstChild("\x68\x55\x55\x62\x5f\x4d\x61\x69\x6e")) {
    PlayerGui.FindFirstChild("\x68\x55\x55\x62\x5f\x4d\x61\x69\x6e")!.Destroy();
}


const _0xf3b22a07 = {
    _0x3f9a053d:         Color3.fromRGB(0x12, 0x12, 0x18),
    _0xc4d24c6d:    Color3.fromRGB(0x1a, 0x1a, 0x22),
    _0xf262366e:  Color3.fromRGB(0x22, 0x22, 0x2c),
    _0xc3ca1c39:     Color3.fromRGB(0x64, 0x8c, 0xff),
    _0xc99ea83a:  Color3.fromRGB(0x46, 0x64, 0xc8),
    _0x3f263672:       Color3.fromRGB(0xe6, 0xe6, 0xf0),
    _0xbea42473:    Color3.fromRGB(0x8c, 0x8c, 0xa0),
    _0xe23ad274:  Color3.fromRGB(0x5a, 0x5a, 0x69),
    _0xb123386c:    Color3.fromRGB(0x50, 0xdc, 0x8c),
    warn:       Color3.fromRGB(0xff, 0xb4, 0x3c),
    error:      Color3.fromRGB(0xff, 0x50, 0x5a),
    _0xcb56ac3f:     Color3.fromRGB(0x32, 0x32, 0x41),
};


const _0xb57b617b = (_0x41b8935a: Instance, _0x703cb354: _0xbb2c2137, _0x84f7cc63: _0x94151f23<string, unknown>) => {
    TweenService.Create(_0x41b8935a, _0x703cb354, _0x84f7cc63).Play();
};

const _0x8dec1c76 = (_0x34ff6a4a: number) => new _0xbb2c2137(_0x34ff6a4a, Enum.EasingStyle.Quint, Enum.EasingDirection.Out);

const _0xe9dd0f3b = (_0x20314960: Instance, _0xf8129065: number) => {
    const _0x33587c41 = new Instance("\x55\x49\x43\x6f\x72\x6e\x65\x72");
    _0x33587c41.CornerRadius = new UDim(0x0, _0xf8129065);
    _0x33587c41.Parent = _0x20314960;
};

const _0xff59b53c = (_0x20314960: Instance, _0x3d80fa46: Color3, _0x42c60275: number, _0xcc89877a?: number) => {
    const _0x06396969 = new Instance("\x55\x49\x53\x74\x72\x6f\x6b\x65");
    _0x06396969.Color = _0x3d80fa46;
    _0x06396969.Thickness = _0x42c60275;
    _0x06396969.Transparency = _0xcc89877a ?? 0.7;
    _0x06396969.ApplyStrokeMode = Enum.ApplyStrokeMode.Border;
    _0x06396969.Parent = _0x20314960;
    return _0x06396969;
};

const _0xfe2bf078 = (_0x3f263672: string, _0x3d80fa46?: Color3) => {
    const _0x3f9a053d = new Instance("\x46\x72\x61\x6d\x65");
    _0x3f9a053d.Size = new UDim2(0x0, 0x104, 0x0, 0x20);
    _0x3f9a053d.Position = new UDim2(0.5, -0x82, 0x1, 0xa);
    _0x3f9a053d.BackgroundColor3 = _0x3d80fa46 ?? _0xf3b22a07._0xc3ca1c39;
    _0x3f9a053d.BorderSizePixel = 0x0;
    _0x3f9a053d.ZIndex = 0x64;
    _0x3f9a053d.Parent = _0xa0350952;
    _0xe9dd0f3b(_0x3f9a053d, 0x8);

    const _0x569d3056 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
    _0x569d3056.Size = new UDim2(0x1, -0x10, 0x1, 0x0);
    _0x569d3056.Position = new UDim2(0x0, 0x8, 0x0, 0x0);
    _0x569d3056.BackgroundTransparency = 0x1;
    _0x569d3056.Text = _0x3f263672;
    _0x569d3056.TextColor3 = _0xf3b22a07._0x3f263672;
    _0x569d3056.TextSize = 0xc;
    _0x569d3056.Font = Enum.Font.GothamMedium;
    _0x569d3056.TextXAlignment = Enum.TextXAlignment.Center;
    _0x569d3056.ZIndex = 0x65;
    _0x569d3056.Parent = _0x3f9a053d;

    _0xb57b617b(_0x3f9a053d, _0x8dec1c76(0.3), { Position: new UDim2(0.5, -0x82, 0x1, -0x2a) });
    _0x09dc8f71.delay(2.5, () => {
        _0xb57b617b(_0x3f9a053d, _0x8dec1c76(0.3), { Position: new UDim2(0.5, -0x82, 0x1, 0xa) });
        _0x09dc8f71.delay(0.35, () => _0x3f9a053d.Destroy());
    });
};


const _0xa0350952 = new Instance("\x53\x63\x72\x65\x65\x6e\x47\x75\x69");
_0xa0350952.Name = "\x68\x55\x55\x62\x5f\x4d\x61\x69\x6e";
_0xa0350952.ResetOnSpawn = !1;
_0xa0350952.ZIndexBehavior = Enum.ZIndexBehavior.Sibling;
_0xa0350952.Parent = PlayerGui;


const _0x88c5a517 = new Instance("\x46\x72\x61\x6d\x65");
_0x88c5a517.Name = "\x4d\x61\x69\x6e\x46\x72\x61\x6d\x65";
_0x88c5a517.Size = new UDim2(0x0, 0x2a8, 0x0, 0x1cc);
_0x88c5a517.Position = new UDim2(0.5, -0x154, 0.5, -0xe6);
_0x88c5a517.BackgroundColor3 = _0xf3b22a07._0x3f9a053d;
_0x88c5a517.BorderSizePixel = 0x0;
_0x88c5a517.Active = !0;
_0x88c5a517.Draggable = !0;
_0x88c5a517.Parent = _0xa0350952;
_0xe9dd0f3b(_0x88c5a517, 0xa);
_0xff59b53c(_0x88c5a517, _0xf3b22a07._0xcb56ac3f, 0x1);


const _0xbffeeb2d = new Instance("\x49\x6d\x61\x67\x65\x4c\x61\x62\x65\x6c");
_0xbffeeb2d.Size = new UDim2(0x1, 0x1e, 0x1, 0x1e);
_0xbffeeb2d.Position = new UDim2(0x0, -0xf, 0x0, -0xf);
_0xbffeeb2d.BackgroundTransparency = 0x1;
_0xbffeeb2d.Image = "\x72\x62\x78\x61\x73\x73\x65\x74\x69\x64\x3a\x2f\x2f\x36\x30\x31\x35\x38\x39\x37\x38\x34\x33";
_0xbffeeb2d.ImageColor3 = Color3.fromRGB(0x0, 0x0, 0x0);
_0xbffeeb2d.ImageTransparency = 0.6;
_0xbffeeb2d.ScaleType = Enum.ScaleType.Slice;
_0xbffeeb2d.SliceCenter = new _0xd7170424(0x31, 0x31, 0x1c2, 0x1c2);
_0xbffeeb2d.ZIndex = -0x1;
_0xbffeeb2d.Parent = _0x88c5a517;


const _0x9afc7712 = new Instance("\x46\x72\x61\x6d\x65");
_0x9afc7712.Size = new UDim2(0x1, 0x0, 0x0, 0x26);
_0x9afc7712.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
_0x9afc7712.BorderSizePixel = 0x0;
_0x9afc7712.Parent = _0x88c5a517;
_0xe9dd0f3b(_0x9afc7712, 0xa);


const _0x604c7213 = new Instance("\x46\x72\x61\x6d\x65");
_0x604c7213.Size = new UDim2(0x1, 0x0, 0x0, 0xe);
_0x604c7213.Position = new UDim2(0x0, 0x0, 0x1, -0xe);
_0x604c7213.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
_0x604c7213.BorderSizePixel = 0x0;
_0x604c7213.Parent = _0x9afc7712;

const _0xa6707c33 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
_0xa6707c33.Size = new UDim2(0x0, 0xc8, 0x1, 0x0);
_0xa6707c33.Position = new UDim2(0x0, 0xe, 0x0, 0x0);
_0xa6707c33.BackgroundTransparency = 0x1;
_0xa6707c33.Text = "\x68\x55\x55\x62\x20\x20\x76\x32";
_0xa6707c33.TextColor3 = _0xf3b22a07._0xc3ca1c39;
_0xa6707c33.TextSize = 0x10;
_0xa6707c33.Font = Enum.Font.GothamBold;
_0xa6707c33.TextXAlignment = Enum.TextXAlignment.Left;
_0xa6707c33.Parent = _0x9afc7712;

const _0xd6f82b2c = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
_0xd6f82b2c.Size = new UDim2(0x0, 0xfa, 0x1, 0x0);
_0xd6f82b2c.Position = new UDim2(0x0, 0xb4, 0x0, 0x0);
_0xd6f82b2c.BackgroundTransparency = 0x1;
_0xd6f82b2c.Text = Players.GetPlayers().size() + "\x20\x70\x6c\x61\x79\x65\x72\x73";
_0xd6f82b2c.TextColor3 = _0xf3b22a07._0xe23ad274;
_0xd6f82b2c.TextSize = 0xb;
_0xd6f82b2c.Font = Enum.Font.Gotham;
_0xd6f82b2c.TextXAlignment = Enum.TextXAlignment.Left;
_0xd6f82b2c.Parent = _0x9afc7712;


const _0xf12e3709 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
_0xf12e3709.Size = new UDim2(0x0, 0x1e, 0x0, 0x1e);
_0xf12e3709.Position = new UDim2(0x1, -0x24, 0x0, 0x4);
_0xf12e3709.BackgroundColor3 = _0xf3b22a07.error;
_0xf12e3709.Text = "";
_0xf12e3709.BorderSizePixel = 0x0;
_0xf12e3709.Parent = _0x9afc7712;
_0xe9dd0f3b(_0xf12e3709, 0xf);

const _0xa8a0cf0a = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
_0xa8a0cf0a.Size = new UDim2(0x1, 0x0, 0x1, 0x0);
_0xa8a0cf0a.BackgroundTransparency = 0x1;
_0xa8a0cf0a.Text = "\x58";
_0xa8a0cf0a.TextColor3 = _0xf3b22a07._0x3f263672;
_0xa8a0cf0a.TextSize = 0xe;
_0xa8a0cf0a.Font = Enum.Font.GothamBold;
_0xa8a0cf0a.Parent = _0xf12e3709;

_0xf12e3709.MouseButton1Click.Connect(() => {
    _0xb57b617b(_0x88c5a517, _0x8dec1c76(0.25), { Size: new UDim2(0x0, 0x0, 0x0, 0x0), Position: new UDim2(0.5, 0x0, 0.5, 0x0) });
    _0x09dc8f71.delay(0.3, () => _0xa0350952.Destroy());
});

const _0xc8492818 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
_0xc8492818.Size = new UDim2(0x0, 0x1e, 0x0, 0x1e);
_0xc8492818.Position = new UDim2(0x1, -0x48, 0x0, 0x4);
_0xc8492818.BackgroundColor3 = _0xf3b22a07._0xf262366e;
_0xc8492818.Text = "";
_0xc8492818.BorderSizePixel = 0x0;
_0xc8492818.Parent = _0x9afc7712;
_0xe9dd0f3b(_0xc8492818, 0xf);

const _0xe22b6f19 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
_0xe22b6f19.Size = new UDim2(0x1, 0x0, 0x1, 0x0);
_0xe22b6f19.BackgroundTransparency = 0x1;
_0xe22b6f19.Text = "\x2d";
_0xe22b6f19.TextColor3 = _0xf3b22a07._0xbea42473;
_0xe22b6f19.TextSize = 0x10;
_0xe22b6f19.Font = Enum.Font.GothamBold;
_0xe22b6f19.Parent = _0xc8492818;

_0xc8492818.MouseButton1Click.Connect(() => {
    _0x88c5a517.Visible = !1;
});


const _0xd6cd322e = new Instance("\x46\x72\x61\x6d\x65");
_0xd6cd322e.Size = new UDim2(0x0, 0xa0, 0x1, -0x26);
_0xd6cd322e.Position = new UDim2(0x0, 0x0, 0x0, 0x26);
_0xd6cd322e.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
_0xd6cd322e.BorderSizePixel = 0x0;
_0xd6cd322e.ClipsDescendants = !0;
_0xd6cd322e.Parent = _0x88c5a517;
_0xe9dd0f3b(_0xd6cd322e, 0x0);

const _0xcc33d52f = new Instance("\x55\x49\x4c\x69\x73\x74\x4c\x61\x79\x6f\x75\x74");
_0xcc33d52f.Padding = new UDim(0x0, 0x2);
_0xcc33d52f.SortOrder = Enum.SortOrder.LayoutOrder;
_0xcc33d52f.Parent = _0xd6cd322e;

const _0x14dc0b30 = new Instance("\x55\x49\x50\x61\x64\x64\x69\x6e\x67");
_0x14dc0b30.PaddingTop = new UDim(0x0, 0x6);
_0x14dc0b30.Parent = _0xd6cd322e;

const _0x5d14c011 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
_0x5d14c011.Size = new UDim2(0x1, -0x10, 0x0, 0x14);
_0x5d14c011.Position = new UDim2(0x0, 0x8, 0x1, -0x18);
_0x5d14c011.BackgroundTransparency = 0x1;
_0x5d14c011.Text = "\x6d\x61\x64\x65\x20\x77\x69\x74\x68\x20\x3c\x33\x20\x62\x79\x20\x75\x75";
_0x5d14c011.TextColor3 = _0xf3b22a07._0xe23ad274;
_0x5d14c011.TextSize = 0xa;
_0x5d14c011.Font = Enum.Font.Gotham;
_0x5d14c011.TextXAlignment = Enum.TextXAlignment.Left;
_0x5d14c011.Parent = _0xd6cd322e;


const _0x11f0750c = new Instance("\x46\x72\x61\x6d\x65");
_0x11f0750c.Size = new UDim2(0x1, -0xa5, 0x1, -0x30);
_0x11f0750c.Position = new UDim2(0x0, 0xa3, 0x0, 0x26);
_0x11f0750c.BackgroundColor3 = _0xf3b22a07._0x3f9a053d;
_0x11f0750c.BorderSizePixel = 0x0;
_0x11f0750c.ClipsDescendants = !0;
_0x11f0750c.Parent = _0x88c5a517;


const _0x97c4961a = new Instance("\x46\x72\x61\x6d\x65");
_0x97c4961a.Size = new UDim2(0x1, -0xa5, 0x0, 0x1e);
_0x97c4961a.Position = new UDim2(0x0, 0xa3, 0x1, -0x20);
_0x97c4961a.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
_0x97c4961a.BorderSizePixel = 0x0;
_0x97c4961a.Parent = _0x88c5a517;
_0xe9dd0f3b(_0x97c4961a, 0x0);

const _0xcce18936 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
_0xcce18936.Size = new UDim2(0x1, -0x5a, 0x1, 0x0);
_0xcce18936.Position = new UDim2(0x0, 0xa, 0x0, 0x0);
_0xcce18936.BackgroundTransparency = 0x1;
_0xcce18936.Text = "\xe2\x99\xab\x20\x20\x6c\x6f\x66\x69\x5f\x63\x68\x69\x6c\x6c\x2e\x6d\x70\x33";
_0xcce18936.TextColor3 = _0xf3b22a07._0xbea42473;
_0xcce18936.TextSize = 0xb;
_0xcce18936.Font = Enum.Font.Gotham;
_0xcce18936.TextXAlignment = Enum.TextXAlignment.Left;
_0xcce18936.Parent = _0x97c4961a;

const _0xf2c90c34 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
_0xf2c90c34.Size = new UDim2(0x0, 0x48, 0x0, 0x14);
_0xf2c90c34.Position = new UDim2(0x1, -0x50, 0.5, -0xa);
_0xf2c90c34.BackgroundColor3 = _0xf3b22a07._0xf262366e;
_0xf2c90c34.BorderSizePixel = 0x0;
_0xf2c90c34.Text = "\xe2\x99\xab\x20\x6d\x75\x74\x65";
_0xf2c90c34.TextColor3 = _0xf3b22a07._0xbea42473;
_0xf2c90c34.TextSize = 0xa;
_0xf2c90c34.Font = Enum.Font.GothamMedium;
_0xf2c90c34.Parent = _0x97c4961a;
_0xe9dd0f3b(_0xf2c90c34, 0x6);

const _0xd702fb04 = new Instance("\x53\x6f\x75\x6e\x64");
_0xd702fb04.SoundId = "\x72\x62\x78\x61\x73\x73\x65\x74\x69\x64\x3a\x2f\x2f\x39\x30\x34\x33\x38\x38\x37\x30\x39\x31";
_0xd702fb04.Volume = 0.15;
_0xd702fb04.Looped = !0;
_0xd702fb04.Parent = SoundService;
_0xd702fb04.Play();

_0xf2c90c34.MouseButton1Click.Connect(() => {
    _0xd702fb04.Playing = !_0xd702fb04.Playing;
    _0xf2c90c34.Text = _0xd702fb04.Playing ? "\xe2\x99\xab\x20\x6d\x75\x74\x65" : "\xe2\x99\xab\x20\x70\x6c\x61\x79";
    _0xfe2bf078(_0xd702fb04.Playing ? "\x41\x75\x64\x69\x6f\x20\x72\x65\x73\x75\x6d\x65\x64" : "\x41\x75\x64\x69\x6f\x20\x6d\x75\x74\x65\x64");
});


const _0x7cfe9120 = new Map<string, ScrollingFrame>();
const _0x78e96f32 = new Map<string, TextButton>();
let _0x15e43e0e: ScrollingFrame | undefined = undefined;
let _0x9c0e8b0f: TextButton | undefined = undefined;

const _0xeef6bd0d = (_0x55ce6658: string): ScrollingFrame => {
    const _0x891b791f = new Instance("\x53\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x46\x72\x61\x6d\x65");
    _0x891b791f.Size = new UDim2(0x1, -0x6, 0x1, -0x6);
    _0x891b791f.Position = new UDim2(0x0, 0x3, 0x0, 0x3);
    _0x891b791f.BackgroundTransparency = 0x1;
    _0x891b791f.BorderSizePixel = 0x0;
    _0x891b791f.Visible = !1;
    _0x891b791f.ScrollBarThickness = 0x3;
    _0x891b791f.ScrollBarImageColor3 = _0xf3b22a07._0xc99ea83a;
    _0x891b791f.CanvasSize = new UDim2(0x0, 0x0, 0x0, 0x0);
    _0x891b791f.AutomaticCanvasSize = Enum.AutomaticSize.Y;
    _0x891b791f.Parent = _0x11f0750c;

    const _0xe8addf16 = new Instance("\x55\x49\x4c\x69\x73\x74\x4c\x61\x79\x6f\x75\x74");
    _0xe8addf16.Padding = new UDim(0x0, 0x3);
    _0xe8addf16.SortOrder = Enum.SortOrder.LayoutOrder;
    _0xe8addf16.Parent = _0x891b791f;

    const _0xd07dba1e = new Instance("\x55\x49\x50\x61\x64\x64\x69\x6e\x67");
    _0xd07dba1e.PaddingLeft = new UDim(0x0, 0x3);
    _0xd07dba1e.PaddingRight = new UDim(0x0, 0x3);
    _0xd07dba1e.Parent = _0x891b791f;

    _0x7cfe9120.set(_0x55ce6658, _0x891b791f);
    return _0x891b791f;
};

const _0x25b50c31 = (_0x55ce6658: string) => {
    const _0xbaeb8070 = _0x7cfe9120.get(_0x55ce6658);
    const _0x7560db6f = _0x78e96f32.get(_0x55ce6658);
    if (_0x15e43e0e === _0xbaeb8070) return;

    
    if (_0x9c0e8b0f) {
        _0xb57b617b(_0x9c0e8b0f, _0x8dec1c76(0.15), { BackgroundColor3: _0xf3b22a07._0xc4d24c6d });
        const _0xb99d075c = _0x9c0e8b0f.FindFirstChild("\x54\x61\x62\x4c\x61\x62\x65\x6c") as TextLabel;
        if (_0xb99d075c) _0xb99d075c.TextColor3 = _0xf3b22a07._0xbea42473;
    }

    if (_0x15e43e0e) _0x15e43e0e.Visible = !1;
    _0x15e43e0e = _0xbaeb8070;
    if (_0x15e43e0e) _0x15e43e0e.Visible = !0;

    
    if (_0x7560db6f) {
        _0xb57b617b(_0x7560db6f, _0x8dec1c76(0.15), { BackgroundColor3: _0xf3b22a07._0xf262366e });
        const _0x6eb16c59 = _0x7560db6f.FindFirstChild("\x54\x61\x62\x4c\x61\x62\x65\x6c") as TextLabel;
        if (_0x6eb16c59) _0x6eb16c59.TextColor3 = _0xf3b22a07._0xc3ca1c39;
        _0x9c0e8b0f = _0x7560db6f;
    }
};

const _0x2eddef02 = (_0x55ce6658: string, _0xb369395d: number) => {
    const _0x20550806 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
    _0x20550806.Size = new UDim2(0x1, -0x8, 0x0, 0x1c);
    _0x20550806.Position = new UDim2(0x0, 0x4, 0x0, 0x0);
    _0x20550806.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
    _0x20550806.BorderSizePixel = 0x0;
    _0x20550806.Text = "";
    _0x20550806.AutoButtonColor = !1;
    _0x20550806.LayoutOrder = _0xb369395d;
    _0x20550806.Parent = _0xd6cd322e;
    _0xe9dd0f3b(_0x20550806, 0x6);

    const _0xefff2815 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
    _0xefff2815.Name = "\x54\x61\x62\x4c\x61\x62\x65\x6c";
    _0xefff2815.Size = new UDim2(0x1, -0xc, 0x1, 0x0);
    _0xefff2815.Position = new UDim2(0x0, 0xc, 0x0, 0x0);
    _0xefff2815.BackgroundTransparency = 0x1;
    _0xefff2815.Text = _0x55ce6658;
    _0xefff2815.TextColor3 = _0xf3b22a07._0xbea42473;
    _0xefff2815.TextSize = 0xc;
    _0xefff2815.Font = Enum.Font.GothamMedium;
    _0xefff2815.TextXAlignment = Enum.TextXAlignment.Left;
    _0xefff2815.Parent = _0x20550806;

    _0x20550806.MouseEnter.Connect(() => {
        if (_0x9c0e8b0f !== _0x20550806) _0xb57b617b(_0x20550806, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xf262366e });
    });
    _0x20550806.MouseLeave.Connect(() => {
        if (_0x9c0e8b0f !== _0x20550806) _0xb57b617b(_0x20550806, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc4d24c6d });
    });
    _0x20550806.MouseButton1Click.Connect(() => _0x25b50c31(_0x55ce6658));

    _0x78e96f32.set(_0x55ce6658, _0x20550806);
};


const _0xea2bd400 = (_0xa195e65f: Instance, _0xc9679077: string, _0x8e14b74f: () => void, _0xb369395d?: number) => {
    const _0x8d752127 = new Instance("\x46\x72\x61\x6d\x65");
    _0x8d752127.Size = new UDim2(0x1, 0x0, 0x0, 0x20);
    _0x8d752127.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
    _0x8d752127.BorderSizePixel = 0x0;
    _0x8d752127.LayoutOrder = _0xb369395d ?? 0x0;
    _0x8d752127.Parent = _0xa195e65f;
    _0xe9dd0f3b(_0x8d752127, 0x6);

    const _0xefff2815 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
    _0xefff2815.Size = new UDim2(0x1, -0x46, 0x1, 0x0);
    _0xefff2815.Position = new UDim2(0x0, 0xa, 0x0, 0x0);
    _0xefff2815.BackgroundTransparency = 0x1;
    _0xefff2815.Text = _0xc9679077;
    _0xefff2815.TextColor3 = _0xf3b22a07._0x3f263672;
    _0xefff2815.TextSize = 0xc;
    _0xefff2815.Font = Enum.Font.Gotham;
    _0xefff2815.TextXAlignment = Enum.TextXAlignment.Left;
    _0xefff2815.Parent = _0x8d752127;

    const _0xac653928 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
    _0xac653928.Size = new UDim2(0x0, 0x36, 0x0, 0x16);
    _0xac653928.Position = new UDim2(0x1, -0x3e, 0.5, -0xb);
    _0xac653928.BackgroundColor3 = _0xf3b22a07._0xc99ea83a;
    _0xac653928.BorderSizePixel = 0x0;
    _0xac653928.Text = "\x72\x75\x6e";
    _0xac653928.TextColor3 = _0xf3b22a07._0x3f263672;
    _0xac653928.TextSize = 0xb;
    _0xac653928.Font = Enum.Font.GothamBold;
    _0xac653928.AutoButtonColor = !1;
    _0xac653928.Parent = _0x8d752127;
    _0xe9dd0f3b(_0xac653928, 0x6);

    _0xac653928.MouseEnter.Connect(() => _0xb57b617b(_0xac653928, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc3ca1c39 }));
    _0xac653928.MouseLeave.Connect(() => _0xb57b617b(_0xac653928, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc99ea83a }));

    _0xac653928.MouseButton1Click.Connect(() => {
        _0xfe2bf078("\x52\x75\x6e\x6e\x69\x6e\x67\x3a\x20" + _0xc9679077, _0xf3b22a07._0xc3ca1c39);
        const [_0xc33ccb5b, _0xcb54644c] = pcall(_0x8e14b74f);
        if (!_0xc33ccb5b) _0xfe2bf078("\x45\x72\x72\x6f\x72\x3a\x20" + _0x7060b079(_0xcb54644c), _0xf3b22a07.error);
    });
};


const _0x623bb401 = (_0xa195e65f: Instance, _0xc9679077: string, _0xb369395d: number) => {
    const _0x569d3056 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
    _0x569d3056.Size = new UDim2(0x1, 0x0, 0x0, 0x16);
    _0x569d3056.BackgroundTransparency = 0x1;
    _0x569d3056.Text = "\x20\x20" + _0xc9679077;
    _0x569d3056.TextColor3 = _0xf3b22a07._0xe23ad274;
    _0x569d3056.TextSize = 0xb;
    _0x569d3056.Font = Enum.Font.GothamBold;
    _0x569d3056.TextXAlignment = Enum.TextXAlignment.Left;
    _0x569d3056.LayoutOrder = _0xb369395d;
    _0x569d3056.Parent = _0xa195e65f;
};


const _0x2acde70b = _0xeef6bd0d("\x63\x6c\x6f\x75\x64\x20\x73\x65\x61\x72\x63\x68");
const _0x335dc803 = _0xeef6bd0d("\x61\x64\x6d\x69\x6e");
const _0xd4619b14 = _0xeef6bd0d("\x68\x75\x62\x73");
const _0x6a7d3a22 = _0xeef6bd0d("\x72\x65\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73");
const _0x4bfa2c38 = _0xeef6bd0d("\x76\x69\x73\x75\x61\x6c\x73");
const _0xa7b2e235 = _0xeef6bd0d("\x74\x6f\x6f\x6c\x73");
const _0xefa9a521 = _0xeef6bd0d("\x70\x6c\x61\x79\x65\x72");
const _0xcc58551d = _0xeef6bd0d("\x6e\x6f\x74\x65\x70\x61\x64");

_0x2eddef02("\x63\x6c\x6f\x75\x64\x20\x73\x65\x61\x72\x63\x68", 0x1);
_0x2eddef02("\x61\x64\x6d\x69\x6e", 0x2);
_0x2eddef02("\x68\x75\x62\x73", 0x3);
_0x2eddef02("\x72\x65\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73", 0x4);
_0x2eddef02("\x76\x69\x73\x75\x61\x6c\x73", 0x5);
_0x2eddef02("\x74\x6f\x6f\x6c\x73", 0x6);
_0x2eddef02("\x70\x6c\x61\x79\x65\x72", 0x7);
_0x2eddef02("\x6e\x6f\x74\x65\x70\x61\x64", 0x8);

_0x25b50c31("\x61\x64\x6d\x69\x6e");




const _0x714e1d2b = new Instance("\x46\x72\x61\x6d\x65");
_0x714e1d2b.Size = new UDim2(0x1, 0x0, 0x0, 0x22);
_0x714e1d2b.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
_0x714e1d2b.BorderSizePixel = 0x0;
_0x714e1d2b.Parent = _0x2acde70b;
_0xe9dd0f3b(_0x714e1d2b, 0x6);

const _0x33e8d929 = new Instance("\x54\x65\x78\x74\x42\x6f\x78");
_0x33e8d929.Size = new UDim2(0x1, -0x46, 0x1, 0x0);
_0x33e8d929.Position = new UDim2(0x0, 0xa, 0x0, 0x0);
_0x33e8d929.BackgroundTransparency = 0x1;
_0x33e8d929.PlaceholderText = "\x53\x65\x61\x72\x63\x68\x20\x31\x30\x2c\x30\x30\x30\x2b\x20\x6f\x6e\x6c\x69\x6e\x65\x20\x73\x63\x72\x69\x70\x74\x73\x2e\x2e\x2e";
_0x33e8d929.PlaceholderColor3 = _0xf3b22a07._0xe23ad274;
_0x33e8d929.Text = "";
_0x33e8d929.TextColor3 = _0xf3b22a07._0x3f263672;
_0x33e8d929.TextSize = 0xc;
_0x33e8d929.Font = Enum.Font.Gotham;
_0x33e8d929.TextXAlignment = Enum.TextXAlignment.Left;
_0x33e8d929.ClearTextOnFocus = !1;
_0x33e8d929.Parent = _0x714e1d2b;

const _0xc755572a = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
_0xc755572a.Size = new UDim2(0x0, 0x36, 0x0, 0x18);
_0xc755572a.Position = new UDim2(0x1, -0x3e, 0.5, -0xc);
_0xc755572a.BackgroundColor3 = _0xf3b22a07._0xc99ea83a;
_0xc755572a.BorderSizePixel = 0x0;
_0xc755572a.Text = "\x53\x65\x61\x72\x63\x68";
_0xc755572a.TextColor3 = _0xf3b22a07._0x3f263672;
_0xc755572a.TextSize = 0xb;
_0xc755572a.Font = Enum.Font.GothamBold;
_0xc755572a.AutoButtonColor = !1;
_0xc755572a.Parent = _0x714e1d2b;
_0xe9dd0f3b(_0xc755572a, 0x6);

_0xc755572a.MouseEnter.Connect(() => _0xb57b617b(_0xc755572a, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc3ca1c39 }));
_0xc755572a.MouseLeave.Connect(() => _0xb57b617b(_0xc755572a, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc99ea83a }));

const _0x5bb7b625 = new Instance("\x46\x72\x61\x6d\x65");
_0x5bb7b625.Size = new UDim2(0x1, 0x0, 0x1, -0x28);
_0x5bb7b625.Position = new UDim2(0x0, 0x0, 0x0, 0x28);
_0x5bb7b625.BackgroundTransparency = 0x1;
_0x5bb7b625.Parent = _0x2acde70b;

const _0x30d2ac26 = new Instance("\x55\x49\x4c\x69\x73\x74\x4c\x61\x79\x6f\x75\x74");
_0x30d2ac26.Padding = new UDim(0x0, 0x3);
_0x30d2ac26.Parent = _0x5bb7b625;

const _0xc4a43c49 = () => {
    const _0xb6c96764 = _0x33e8d929.Text;
    if (_0xb6c96764 === "") return;

    
    for (const _0xdd7fd945 of _0x5bb7b625.GetChildren()) {
        if (_0xdd7fd945.IsA("\x46\x72\x61\x6d\x65")) _0xdd7fd945.Destroy();
    }

    
    const _0xd168a757 = new Instance("\x54\x65\x78\x74\x4c\x61\x62\x65\x6c");
    _0xd168a757.Size = new UDim2(0x1, 0x0, 0x0, 0x1e);
    _0xd168a757.BackgroundTransparency = 0x1;
    _0xd168a757.Text = "\x53\x65\x61\x72\x63\x68\x69\x6e\x67\x2e\x2e\x2e";
    _0xd168a757.TextColor3 = _0xf3b22a07._0xe23ad274;
    _0xd168a757.TextSize = 0xc;
    _0xd168a757.Font = Enum.Font.Gotham;
    _0xd168a757.Parent = _0x5bb7b625;

    const [_0xb123386c, _0xbb8b0966] = pcall(() => {
        return game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x63\x72\x69\x70\x74\x62\x6c\x6f\x78\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x73\x63\x72\x69\x70\x74\x2f\x73\x65\x61\x72\x63\x68\x3f\x71\x3d" + HttpService.UrlEncode(_0xb6c96764) + "\x26\x6d\x61\x78\x3d\x32\x30");
    });

    _0xd168a757.Destroy();

    if (_0xb123386c && typeIs(_0xbb8b0966, "\x73\x74\x72\x69\x6e\x67")) {
        const _0xef425147 = HttpService.JSONDecode(_0xbb8b0966) as { _0x34b54c67?: { _0x1457456b?: Array<{ script: string; _0xc9679077: string; game: { _0x55ce6658?: string } }> } };
        if (_0xef425147 && _0xef425147._0x34b54c67 && _0xef425147._0x34b54c67._0x1457456b) {
            const _0x1457456b = _0xef425147._0x34b54c67._0x1457456b;
            if (_0x1457456b.size() === 0x0) {
                _0xfe2bf078("\x4e\x6f\x20\x72\x65\x73\x75\x6c\x74\x73\x20\x66\x6f\x75\x6e\x64", _0xf3b22a07.warn);
                return;
            }
            _0xfe2bf078(_0x7060b079(_0x1457456b.size()) + "\x20\x73\x63\x72\x69\x70\x74\x73\x20\x66\x6f\x75\x6e\x64", _0xf3b22a07._0xb123386c);
            for (const _0x06396969 of _0x1457456b) {
                const _0x9c6b016a = _0x06396969.script;
                _0xea2bd400(_0x5bb7b625, _0x06396969._0xc9679077 + "\x20\x5b" + (_0x06396969.game._0x55ce6658 ?? "\x55\x6e\x69\x76\x65\x72\x73\x61\x6c") + "\x5d", () => {
                    loadstring(_0x9c6b016a)();
                });
            }
        }
    } else {
        _0xfe2bf078("\x53\x65\x61\x72\x63\x68\x20\x66\x61\x69\x6c\x65\x64\x20\x2d\x20\x63\x68\x65\x63\x6b\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e", _0xf3b22a07.error);
    }
};

_0xc755572a.MouseButton1Click.Connect(_0xc4a43c49);
_0x33e8d929.FocusLost.Connect((_0xfd5e454b) => {
    if (_0xfd5e454b) _0xc4a43c49();
});




_0x623bb401(_0x335dc803, "\x52\x65\x6d\x6f\x74\x65\x20\x41\x64\x6d\x69\x6e\x73", 0x1);
_0xea2bd400(_0x335dc803, "\x49\x6e\x66\x69\x6e\x69\x74\x65\x20\x59\x69\x65\x6c\x64", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x45\x64\x67\x65\x49\x59\x2f\x69\x6e\x66\x69\x6e\x69\x74\x65\x79\x69\x65\x6c\x64\x2f\x6d\x61\x73\x74\x65\x72\x2f\x73\x6f\x75\x72\x63\x65"))(); }, 0x2);
_0xea2bd400(_0x335dc803, "\x43\x4d\x44\x2d\x58", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x43\x4d\x44\x2d\x58\x2f\x43\x4d\x44\x2d\x58\x2f\x6d\x61\x73\x74\x65\x72\x2f\x53\x6f\x75\x72\x63\x65"))(); }, 0x3);
_0xea2bd400(_0x335dc803, "\x4e\x61\x6d\x65\x6c\x65\x73\x73\x20\x41\x64\x6d\x69\x6e", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x66\x69\x6c\x74\x65\x72\x69\x6e\x67\x2d\x65\x6e\x61\x62\x6c\x65\x64\x2f\x4e\x61\x6d\x65\x6c\x65\x73\x73\x41\x64\x6d\x69\x6e\x2f\x6d\x61\x69\x6e\x2f\x53\x6f\x75\x72\x63\x65"))(); }, 0x4);
_0xea2bd400(_0x335dc803, "\x46\x61\x74\x65\x73\x20\x41\x64\x6d\x69\x6e", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x66\x61\x74\x65\x73\x63\x2f\x66\x61\x74\x65\x73\x2d\x61\x64\x6d\x69\x6e\x2f\x6d\x61\x69\x6e\x2f\x6d\x61\x69\x6e\x2e\x6c\x75\x61"))(); }, 0x5);
_0xea2bd400(_0x335dc803, "\x52\x65\x76\x69\x7a\x20\x41\x64\x6d\x69\x6e\x20\x56\x32", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x53\x75\x62\x73\x63\x72\x69\x62\x65\x74\x6f\x54\x53\x55\x4b\x31\x2f\x52\x65\x76\x69\x7a\x2d\x41\x64\x6d\x69\x6e\x2d\x56\x32\x2f\x6d\x61\x69\x6e\x2f\x73\x63\x72\x69\x70\x74"))(); }, 0x6);
_0xea2bd400(_0x335dc803, "\x53\x68\x61\x74\x74\x65\x72\x76\x61\x73\x74\x20\x41\x64\x6d\x69\x6e", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x53\x68\x61\x74\x74\x65\x72\x76\x61\x73\x74\x2f\x53\x68\x61\x74\x74\x65\x72\x76\x61\x73\x74\x2d\x41\x64\x6d\x69\x6e\x2f\x6d\x61\x69\x6e\x2f\x53\x6f\x75\x72\x63\x65"))(); }, 0x7);

_0x623bb401(_0x335dc803, "\x43\x75\x73\x74\x6f\x6d", 0xa);
_0xea2bd400(_0x335dc803, "\x55\x55\x43\x68\x61\x74", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x44\x69\x73\x74\x65\x6e\x64\x6f\x2f\x75\x75\x63\x68\x61\x74\x2f\x72\x65\x66\x73\x2f\x68\x65\x61\x64\x73\x2f\x6d\x61\x69\x6e\x2f\x55\x55\x63\x68\x61\x74\x2e\x6c\x75\x61"))(); }, 0xb);
_0xea2bd400(_0x335dc803, "\x4d\x6f\x6c\x64\x6f\x76\x61\x6e\x41\x64\x6d\x69\x6e", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x46\x6f\x61\x72\x74\x65\x42\x69\x6e\x65\x2f\x4d\x6f\x6c\x64\x6f\x76\x61\x6e\x41\x64\x6d\x69\x6e\x2f\x72\x65\x66\x73\x2f\x68\x65\x61\x64\x73\x2f\x6d\x61\x69\x6e\x2f\x6d\x61\x69\x6e\x2e\x6c\x75\x61"))(); }, 0xc);




_0xea2bd400(_0xd4619b14, "\x4f\x72\x63\x61\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x72\x69\x63\x68\x69\x65\x30\x38\x36\x36\x2f\x6f\x72\x63\x61\x2f\x6d\x61\x73\x74\x65\x72\x2f\x73\x6f\x75\x72\x63\x65\x2e\x6c\x75\x61"))(); }, 0x1);
_0xea2bd400(_0xd4619b14, "\x44\x6f\x6d\x61\x69\x6e\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x73\x68\x6c\x65\x78\x77\x61\x72\x65\x2f\x44\x6f\x6d\x61\x69\x6e\x2f\x6d\x61\x69\x6e\x2f\x73\x6f\x75\x72\x63\x65"))(); }, 0x2);
_0xea2bd400(_0xd4619b14, "\x53\x6f\x6c\x61\x72\x69\x73\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x53\x74\x65\x61\x6c\x74\x68\x6c\x61\x62\x73\x2f\x53\x6f\x6c\x61\x72\x69\x73\x2f\x6d\x61\x69\x6e\x2f\x53\x6f\x6c\x61\x72\x69\x73\x56\x32\x2e\x6c\x75\x61"))(); }, 0x3);
_0xea2bd400(_0xd4619b14, "\x56\x79\x6e\x65\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x56\x79\x6e\x65\x48\x75\x62\x2f\x56\x79\x6e\x65\x48\x75\x62\x2f\x6d\x61\x69\x6e\x2f\x53\x6f\x75\x72\x63\x65\x2e\x6c\x75\x61"))(); }, 0x4);
_0xea2bd400(_0xd4619b14, "\x55\x6e\x66\x61\x69\x72\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x72\x62\x6c\x78\x73\x63\x72\x69\x70\x74\x73\x6e\x65\x74\x2f\x75\x6e\x66\x61\x69\x72\x2f\x6d\x61\x69\x6e\x2f\x72\x62\x6c\x78\x75\x6e\x66\x61\x69\x72\x2e\x6c\x75\x61"))(); }, 0x5);
_0xea2bd400(_0xd4619b14, "\x4f\x77\x6c\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x43\x72\x69\x53\x68\x6f\x72\x65\x2f\x4f\x77\x6c\x48\x75\x62\x2f\x6d\x61\x73\x74\x65\x72\x2f\x4f\x77\x6c\x48\x75\x62\x2e\x74\x78\x74"))(); }, 0x6);
_0xea2bd400(_0xd4619b14, "\x45\x7a\x20\x48\x75\x62", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x64\x65\x62\x75\x67\x31\x32\x30\x2f\x45\x7a\x2d\x48\x75\x62\x2f\x6d\x61\x69\x6e\x2f\x45\x7a\x25\x32\x30\x48\x75\x62\x2e\x6c\x75\x61"))(); }, 0x7);




_0x623bb401(_0x6a7d3a22, "\x4e\x65\x74\x77\x6f\x72\x6b\x20\x52\x65\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73", 0x1);
_0xea2bd400(_0x6a7d3a22, "\x4d\x69\x7a\x74\x20\x52\x65\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x4d\x69\x7a\x74\x48\x55\x42\x2f\x52\x65\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x2f\x6d\x61\x69\x6e\x2f\x4d\x69\x7a\x74\x52\x65\x61\x6e\x69\x6d\x2e\x6c\x75\x61"))(); }, 0x2);
_0xea2bd400(_0x6a7d3a22, "\x53\x69\x6d\x70\x6c\x65\x20\x52\x65\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x20\x28\x46\x45\x29", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x47\x65\x6c\x61\x74\x65\x6b\x2f\x52\x65\x61\x6e\x69\x6d\x2f\x6d\x61\x69\x6e\x2f\x52\x65\x61\x6e\x69\x6d\x2e\x6c\x75\x61"))(); }, 0x3);
_0xea2bd400(_0x6a7d3a22, "\x4e\x75\x6c\x6c\x77\x61\x72\x65\x20\x48\x75\x62\x20\x28\x52\x65\x61\x6e\x69\x6d\x73\x29", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x4e\x75\x6c\x6c\x57\x69\x46\x69\x2f\x4e\x75\x6c\x6c\x77\x61\x72\x65\x2d\x76\x33\x2f\x6d\x61\x69\x6e\x2f\x4e\x75\x6c\x6c\x77\x61\x72\x65\x4d\x61\x69\x6e"))(); }, 0x4);

_0x623bb401(_0x6a7d3a22, "\x56\x65\x6c\x6f\x63\x69\x74\x79\x20\x2f\x20\x4e\x65\x74\x6c\x65\x73\x73", 0xa);
_0xea2bd400(_0x6a7d3a22, "\x4e\x65\x74\x6c\x65\x73\x73\x20\x45\x6e\x67\x69\x6e\x65", () => {
    const _0x90075144 = LocalPlayer.Character;
    if (_0x90075144) {
        for (const _0xd8a11d61 of _0x90075144.GetChildren()) {
            if (_0xd8a11d61.IsA("\x42\x61\x73\x65\x50\x61\x72\x74")) {
                RunService.Heartbeat.Connect(() => {
                    _0xd8a11d61.Velocity = new Vector3(0x0, -0x1e, 0x0);
                });
            }
        }
    }
}, 0xb);




_0x623bb401(_0x4bfa2c38, "\x50\x6c\x61\x79\x65\x72\x20\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x73", 0x1);
_0xea2bd400(_0x4bfa2c38, "\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x20\x45\x53\x50\x20\x28\x41\x6c\x6c\x20\x50\x6c\x61\x79\x65\x72\x73\x29", () => {
    for (const _0x75683c62 of Players.GetPlayers()) {
        if (_0x75683c62 !== LocalPlayer && _0x75683c62.Character && !_0x75683c62.Character.FindFirstChild("\x68\x55\x55\x62\x5f\x45\x53\x50")) {
            const _0x87fb5f53 = new Instance("\x48\x69\x67\x68\x6c\x69\x67\x68\x74");
            _0x87fb5f53.Name = "\x68\x55\x55\x62\x5f\x45\x53\x50";
            _0x87fb5f53.FillColor = _0xf3b22a07._0xc3ca1c39;
            _0x87fb5f53.FillTransparency = 0.6;
            _0x87fb5f53.OutlineColor = _0xf3b22a07._0xc3ca1c39;
            _0x87fb5f53.OutlineTransparency = 0x0;
            _0x87fb5f53.Parent = _0x75683c62.Character;
        }
    }
}, 0x2);
_0xea2bd400(_0x4bfa2c38, "\x52\x65\x6d\x6f\x76\x65\x20\x45\x53\x50", () => {
    for (const _0x75683c62 of Players.GetPlayers()) {
        if (_0x75683c62.Character) {
            const _0x87fb5f53 = _0x75683c62.Character.FindFirstChild("\x68\x55\x55\x62\x5f\x45\x53\x50");
            if (_0x87fb5f53) _0x87fb5f53.Destroy();
        }
    }
}, 0x3);

_0x623bb401(_0x4bfa2c38, "\x4c\x69\x67\x68\x74\x69\x6e\x67", 0xa);
_0xea2bd400(_0x4bfa2c38, "\x46\x75\x6c\x6c\x62\x72\x69\x67\x68\x74", () => {
    Lighting.Brightness = 0x2;
    Lighting.ClockTime = 0xe;
    Lighting.FogEnd = 0x186a0;
    Lighting.GlobalShadows = !1;
    Lighting.Ambient = Color3.fromRGB(0xb2, 0xb2, 0xb2);
}, 0xb);
_0xea2bd400(_0x4bfa2c38, "\x4e\x69\x67\x68\x74\x20\x4d\x6f\x64\x65", () => {
    Lighting.Brightness = 0.5;
    Lighting.ClockTime = 0x0;
    Lighting.FogEnd = 0x3e8;
    Lighting.GlobalShadows = !0;
    Lighting.Ambient = Color3.fromRGB(0x14, 0x14, 0x1e);
}, 0xc);
_0xea2bd400(_0x4bfa2c38, "\x52\x54\x58\x20\x53\x68\x61\x64\x65\x72\x20\x50\x72\x65\x73\x65\x74", () => {
    Lighting.GlobalShadows = !0;
    Lighting.Brightness = 0x3;
    Lighting.OutdoorAmbient = Color3.fromRGB(0x78, 0x78, 0x78);
    const _0xee72b84d = Lighting.FindFirstChild("\x68\x55\x55\x62\x5f\x42\x6c\x6f\x6f\x6d");
    if (_0xee72b84d) _0xee72b84d.Destroy();
    const _0x8477353e = new Instance("\x42\x6c\x6f\x6f\x6d\x45\x66\x66\x65\x63\x74");
    _0x8477353e.Name = "\x68\x55\x55\x62\x5f\x42\x6c\x6f\x6f\x6d";
    _0x8477353e.Intensity = 0.4;
    _0x8477353e.Size = 0x18;
    _0x8477353e.Threshold = 0.8;
    _0x8477353e.Parent = Lighting;
}, 0xd);
_0xea2bd400(_0x4bfa2c38, "\x52\x65\x6d\x6f\x76\x65\x20\x41\x6c\x6c\x20\x53\x68\x61\x64\x65\x72\x73", () => {
    for (const _0xdd7fd945 of Lighting.GetChildren()) {
        if (_0xdd7fd945.IsA("\x50\x6f\x73\x74\x45\x66\x66\x65\x63\x74")) _0xdd7fd945.Destroy();
    }
    _0xfe2bf078("\x53\x68\x61\x64\x65\x72\x73\x20\x72\x65\x6d\x6f\x76\x65\x64", _0xf3b22a07._0xb123386c);
}, 0xe);

_0x623bb401(_0x4bfa2c38, "\x43\x61\x6d\x65\x72\x61", 0x14);
_0xea2bd400(_0x4bfa2c38, "\x46\x4f\x56\x3a\x20\x39\x30\x20\x28\x44\x65\x66\x61\x75\x6c\x74\x29", () => { workspace.CurrentCamera!.FieldOfView = 0x5a; }, 0x15);
_0xea2bd400(_0x4bfa2c38, "\x46\x4f\x56\x3a\x20\x31\x31\x30\x20\x28\x57\x69\x64\x65\x29", () => { workspace.CurrentCamera!.FieldOfView = 0x6e; }, 0x16);
_0xea2bd400(_0x4bfa2c38, "\x46\x4f\x56\x3a\x20\x31\x32\x30\x20\x28\x55\x6c\x74\x72\x61\x20\x57\x69\x64\x65\x29", () => { workspace.CurrentCamera!.FieldOfView = 0x78; }, 0x17);




_0x623bb401(_0xa7b2e235, "\x45\x78\x70\x6c\x6f\x72\x61\x74\x69\x6f\x6e", 0x1);
_0xea2bd400(_0xa7b2e235, "\x44\x61\x72\x6b\x20\x44\x65\x78\x20\x56\x33", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x42\x61\x62\x79\x68\x61\x6d\x73\x74\x61\x2f\x52\x42\x4c\x58\x5f\x53\x63\x72\x69\x70\x74\x73\x2f\x6d\x61\x69\x6e\x2f\x55\x6e\x69\x76\x65\x72\x73\x61\x6c\x2f\x42\x79\x70\x61\x73\x73\x65\x64\x44\x61\x72\x6b\x44\x65\x78\x56\x33\x2e\x6c\x75\x61"))(); }, 0x2);
_0xea2bd400(_0xa7b2e235, "\x53\x69\x6d\x70\x6c\x65\x53\x70\x79\x20\x56\x32", () => { loadstring(game.HttpGet("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x65\x78\x2d\x73\x65\x72\x75\x6d\x2f\x53\x69\x6d\x70\x6c\x65\x53\x70\x79\x2f\x6d\x61\x69\x6e\x2f\x53\x69\x6d\x70\x6c\x65\x53\x70\x79\x53\x6f\x75\x72\x63\x65\x2e\x6c\x75\x61"))(); }, 0x3);
_0xea2bd400(_0xa7b2e235, "\x48\x79\x64\x72\x6f\x78\x69\x64\x65\x20\x52\x65\x6d\x6f\x74\x65\x20\x53\x70\x79", () => {
    const _0x570b145e = "\x48\x79\x75\x75\x67\x61\x41\x6f\x69";
    const _0xc1764e40 = "\x6d\x61\x73\x74\x65\x72";
    for (const _0xa713fc4e of ["\x69\x6e\x69\x74", "\x75\x69", "\x6f\x68"]) {
        loadstring(game.HttpGet(`https://raw.githubusercontent.com/${_0x570b145e}/Hydroxide/${_0xc1764e40}/${_0xa713fc4e}.lua`))();
    }
}, 0x4);

_0x623bb401(_0xa7b2e235, "\x42\x75\x69\x6c\x64\x69\x6e\x67", 0xa);
_0xea2bd400(_0xa7b2e235, "\x42\x75\x69\x6c\x64\x69\x6e\x67\x20\x54\x6f\x6f\x6c\x73\x20\x28\x46\x33\x58\x29", () => { loadstring(game.GetObjects("\x72\x62\x78\x61\x73\x73\x65\x74\x69\x64\x3a\x2f\x2f\x34\x37\x34\x33\x35\x31\x33\x33\x33\x34")[0x0].Source)(); }, 0xb);




_0x623bb401(_0xefa9a521, "\x4d\x6f\x76\x65\x6d\x65\x6e\x74", 0x1);
_0xea2bd400(_0xefa9a521, "\x57\x61\x6c\x6b\x53\x70\x65\x65\x64\x3a\x20\x35\x30", () => {
    const _0xca5c2b51 = LocalPlayer.Character?.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
    if (_0xca5c2b51) { _0xca5c2b51.WalkSpeed = 0x32; _0xfe2bf078("\x57\x61\x6c\x6b\x53\x70\x65\x65\x64\x20\x3d\x20\x35\x30"); }
}, 0x2);
_0xea2bd400(_0xefa9a521, "\x57\x61\x6c\x6b\x53\x70\x65\x65\x64\x3a\x20\x31\x32\x30", () => {
    const _0xca5c2b51 = LocalPlayer.Character?.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
    if (_0xca5c2b51) { _0xca5c2b51.WalkSpeed = 0x78; _0xfe2bf078("\x57\x61\x6c\x6b\x53\x70\x65\x65\x64\x20\x3d\x20\x31\x32\x30"); }
}, 0x3);
_0xea2bd400(_0xefa9a521, "\x57\x61\x6c\x6b\x53\x70\x65\x65\x64\x3a\x20\x32\x35\x30", () => {
    const _0xca5c2b51 = LocalPlayer.Character?.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
    if (_0xca5c2b51) { _0xca5c2b51.WalkSpeed = 0xfa; _0xfe2bf078("\x57\x61\x6c\x6b\x53\x70\x65\x65\x64\x20\x3d\x20\x32\x35\x30"); }
}, 0x4);
_0xea2bd400(_0xefa9a521, "\x4a\x75\x6d\x70\x50\x6f\x77\x65\x72\x3a\x20\x31\x32\x30", () => {
    const _0xca5c2b51 = LocalPlayer.Character?.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
    if (_0xca5c2b51) { _0xca5c2b51.JumpPower = 0x78; _0xfe2bf078("\x4a\x75\x6d\x70\x50\x6f\x77\x65\x72\x20\x3d\x20\x31\x32\x30"); }
}, 0x5);
_0xea2bd400(_0xefa9a521, "\x4a\x75\x6d\x70\x50\x6f\x77\x65\x72\x3a\x20\x32\x35\x30", () => {
    const _0xca5c2b51 = LocalPlayer.Character?.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
    if (_0xca5c2b51) { _0xca5c2b51.JumpPower = 0xfa; _0xfe2bf078("\x4a\x75\x6d\x70\x50\x6f\x77\x65\x72\x20\x3d\x20\x32\x35\x30"); }
}, 0x6);

_0x623bb401(_0xefa9a521, "\x54\x6f\x67\x67\x6c\x65\x73", 0xa);
_0xea2bd400(_0xefa9a521, "\x49\x6e\x66\x69\x6e\x69\x74\x65\x20\x4a\x75\x6d\x70\x20\x5b\x54\x6f\x67\x67\x6c\x65\x5d", () => {
    _G.InfJump = !_G.InfJump;
    if (!_G.InfJumpLoop) {
        _G.InfJumpLoop = !0;
        UserInputService.JumpRequest.Connect(() => {
            const _0xca5c2b51 = LocalPlayer.Character?.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
            if (_G.InfJump && _0xca5c2b51) _0xca5c2b51.ChangeState(Enum.HumanoidStateType.Jumping);
        });
    }
    _0xfe2bf078(_G.InfJump ? "\x49\x6e\x66\x69\x6e\x69\x74\x65\x20\x4a\x75\x6d\x70\x3a\x20\x4f\x4e" : "\x49\x6e\x66\x69\x6e\x69\x74\x65\x20\x4a\x75\x6d\x70\x3a\x20\x4f\x46\x46", _G.InfJump ? _0xf3b22a07._0xb123386c : _0xf3b22a07.warn);
}, 0xb);
_0xea2bd400(_0xefa9a521, "\x4e\x6f\x63\x6c\x69\x70\x20\x5b\x54\x6f\x67\x67\x6c\x65\x5d", () => {
    _G.Noclip = !_G.Noclip;
    if (!_G.NoclipLoop) {
        _G.NoclipLoop = !0;
        RunService.Stepped.Connect(() => {
            const _0x90075144 = LocalPlayer.Character;
            if (_G.Noclip && _0x90075144) {
                for (const _0xd8a11d61 of _0x90075144.GetChildren()) {
                    if (_0xd8a11d61.IsA("\x42\x61\x73\x65\x50\x61\x72\x74")) _0xd8a11d61.CanCollide = !1;
                }
            }
        });
    }
    _0xfe2bf078(_G.Noclip ? "\x4e\x6f\x63\x6c\x69\x70\x3a\x20\x4f\x4e" : "\x4e\x6f\x63\x6c\x69\x70\x3a\x20\x4f\x46\x46", _G.Noclip ? _0xf3b22a07._0xb123386c : _0xf3b22a07.warn);
}, 0xc);
_0xea2bd400(_0xefa9a521, "\x46\x6c\x79\x20\x5b\x54\x6f\x67\x67\x6c\x65\x5d", () => {
    _G.FlyEnabled = !_G.FlyEnabled;
    if (!_G.FlyLoop) {
        _G.FlyLoop = !0;
        _G.FlySpeed = 0x3c;
        UserInputService.InputBegan.Connect((_0xbd4ed055, _0x53f41a50) => {
            if (_0x53f41a50) return;
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.W) _G.FlyDir = new Vector3(0x0, 0x0, -0x1);
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.S) _G.FlyDir = new Vector3(0x0, 0x0, 0x1);
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.A) _G.FlyDir = new Vector3(-0x1, 0x0, 0x0);
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.D) _G.FlyDir = new Vector3(0x1, 0x0, 0x0);
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.Space) _G.FlyDir = new Vector3(0x0, 0x1, 0x0);
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.LeftControl) _G.FlyDir = new Vector3(0x0, -0x1, 0x0);
        });
        UserInputService.InputEnded.Connect((_0xbd4ed055) => {
            if (_0xbd4ed055.KeyCode === Enum.KeyCode.W || _0xbd4ed055.KeyCode === Enum.KeyCode.S ||
                _0xbd4ed055.KeyCode === Enum.KeyCode.A || _0xbd4ed055.KeyCode === Enum.KeyCode.D ||
                _0xbd4ed055.KeyCode === Enum.KeyCode.Space || _0xbd4ed055.KeyCode === Enum.KeyCode.LeftControl) {
                _G.FlyDir = Vector3.zero;
            }
        });
        RunService.Heartbeat.Connect(() => {
            if (!_G.FlyEnabled) return;
            const _0x90075144 = LocalPlayer.Character;
            if (_0x90075144) {
                const _0x0fc09768 = _0x90075144.FindFirstChild("\x48\x75\x6d\x61\x6e\x6f\x69\x64\x52\x6f\x6f\x74\x50\x61\x72\x74") as _0x2026ca05;
                if (_0x0fc09768) {
                    const _0xa9a0dc42 = workspace.CurrentCamera!;
                    const _0xe78c4543 = _0xa9a0dc42.CFrame;
                    const _0x10604d48 = (_G.FlyDir || Vector3.zero) as Vector3;
                    _0x0fc09768.Velocity = _0xe78c4543.LookVector.mul(-_0x10604d48.Z).add(_0xe78c4543.RightVector.mul(_0x10604d48.X)).add(new Vector3(0x0, _0x10604d48.Y, 0x0)).mul(_G.FlySpeed);
                }
            }
        });
    }
    _0xfe2bf078(_G.FlyEnabled ? "\x46\x6c\x79\x3a\x20\x4f\x4e\x20\x28\x57\x41\x53\x44\x20\x2b\x20\x53\x70\x61\x63\x65\x2f\x43\x74\x72\x6c\x29" : "\x46\x6c\x79\x3a\x20\x4f\x46\x46", _G.FlyEnabled ? _0xf3b22a07._0xb123386c : _0xf3b22a07.warn);
}, 0xd);

_0x623bb401(_0xefa9a521, "\x43\x68\x61\x72\x61\x63\x74\x65\x72", 0x14);
_0xea2bd400(_0xefa9a521, "\x52\x65\x73\x65\x74\x20\x43\x68\x61\x72\x61\x63\x74\x65\x72", () => {
    const _0x90075144 = LocalPlayer.Character;
    if (_0x90075144) {
        const _0xca5c2b51 = _0x90075144.FindFirstChildOfClass("\x48\x75\x6d\x61\x6e\x6f\x69\x64");
        if (_0xca5c2b51) _0xca5c2b51.Health = 0x0;
    }
}, 0x15);
_0xea2bd400(_0xefa9a521, "\x52\x65\x73\x70\x61\x77\x6e", () => {
    LocalPlayer.LoadCharacter();
}, 0x16);




const _0x6a5f1a1c = new Instance("\x54\x65\x78\x74\x42\x6f\x78");
_0x6a5f1a1c.Size = new UDim2(0x1, -0xa, 0x1, -0x28);
_0x6a5f1a1c.Position = new UDim2(0x0, 0x5, 0x0, 0x5);
_0x6a5f1a1c.BackgroundColor3 = _0xf3b22a07._0xc4d24c6d;
_0x6a5f1a1c.BorderSizePixel = 0x0;
_0x6a5f1a1c.MultiLine = !0;
_0x6a5f1a1c.ClearTextOnFocus = !1;
_0x6a5f1a1c.PlaceholderText = "\x2d\x2d\x20\x57\x72\x69\x74\x65\x20\x63\x75\x73\x74\x6f\x6d\x20\x4c\x75\x61\x20\x63\x6f\x64\x65\x20\x68\x65\x72\x65\x2e\x2e\x2e\x0a\x2d\x2d\x20\x43\x6c\x69\x63\x6b\x20\x27\x45\x78\x65\x63\x75\x74\x65\x27\x20\x74\x6f\x20\x72\x75\x6e\x20\x69\x74\x2e";
_0x6a5f1a1c.PlaceholderColor3 = _0xf3b22a07._0xe23ad274;
_0x6a5f1a1c.Text = "";
_0x6a5f1a1c.TextColor3 = _0xf3b22a07._0x3f263672;
_0x6a5f1a1c.TextSize = 0xc;
_0x6a5f1a1c.Font = Enum.Font.Code;
_0x6a5f1a1c.TextXAlignment = Enum.TextXAlignment.Left;
_0x6a5f1a1c.TextYAlignment = Enum.TextYAlignment.Top;
_0x6a5f1a1c.TextWrapped = !0;
_0x6a5f1a1c.Parent = _0xcc58551d;
_0xe9dd0f3b(_0x6a5f1a1c, 0x6);
_0xff59b53c(_0x6a5f1a1c, _0xf3b22a07._0xcb56ac3f, 0x1, 0.8);

const _0xec43e91b = new Instance("\x46\x72\x61\x6d\x65");
_0xec43e91b.Size = new UDim2(0x1, -0xa, 0x0, 0x1c);
_0xec43e91b.Position = new UDim2(0x0, 0x5, 0x1, -0x21);
_0xec43e91b.BackgroundTransparency = 0x1;
_0xec43e91b.Parent = _0xcc58551d;

const _0x42d9f410 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
_0x42d9f410.Size = new UDim2(0x0, 0x64, 0x1, 0x0);
_0x42d9f410.Position = new UDim2(0x1, -0x69, 0x0, 0x0);
_0x42d9f410.BackgroundColor3 = _0xf3b22a07._0xc99ea83a;
_0x42d9f410.BorderSizePixel = 0x0;
_0x42d9f410.Text = "\x45\x78\x65\x63\x75\x74\x65";
_0x42d9f410.TextColor3 = _0xf3b22a07._0x3f263672;
_0x42d9f410.TextSize = 0xc;
_0x42d9f410.Font = Enum.Font.GothamBold;
_0x42d9f410.AutoButtonColor = !1;
_0x42d9f410.Parent = _0xec43e91b;
_0xe9dd0f3b(_0x42d9f410, 0x6);

_0x42d9f410.MouseEnter.Connect(() => _0xb57b617b(_0x42d9f410, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc3ca1c39 }));
_0x42d9f410.MouseLeave.Connect(() => _0xb57b617b(_0x42d9f410, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xc99ea83a }));

const _0xf9d4fc08 = new Instance("\x54\x65\x78\x74\x42\x75\x74\x74\x6f\x6e");
_0xf9d4fc08.Size = new UDim2(0x0, 0x46, 0x1, 0x0);
_0xf9d4fc08.Position = new UDim2(0x1, -0xb4, 0x0, 0x0);
_0xf9d4fc08.BackgroundColor3 = _0xf3b22a07._0xf262366e;
_0xf9d4fc08.BorderSizePixel = 0x0;
_0xf9d4fc08.Text = "\x43\x6c\x65\x61\x72";
_0xf9d4fc08.TextColor3 = _0xf3b22a07._0xbea42473;
_0xf9d4fc08.TextSize = 0xc;
_0xf9d4fc08.Font = Enum.Font.Gotham;
_0xf9d4fc08.AutoButtonColor = !1;
_0xf9d4fc08.Parent = _0xec43e91b;
_0xe9dd0f3b(_0xf9d4fc08, 0x6);

_0xf9d4fc08.MouseEnter.Connect(() => _0xb57b617b(_0xf9d4fc08, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07.error }));
_0xf9d4fc08.MouseLeave.Connect(() => _0xb57b617b(_0xf9d4fc08, _0x8dec1c76(0.1), { BackgroundColor3: _0xf3b22a07._0xf262366e }));

_0x42d9f410.MouseButton1Click.Connect(() => {
    if (_0x6a5f1a1c.Text !== "") {
        _0xfe2bf078("\x45\x78\x65\x63\x75\x74\x69\x6e\x67\x20\x63\x6f\x64\x65\x2e\x2e\x2e", _0xf3b22a07._0xc3ca1c39);
        const [_0xc33ccb5b, _0xcb54644c] = pcall(() => { loadstring(_0x6a5f1a1c.Text)(); });
        if (!_0xc33ccb5b) _0xfe2bf078("\x45\x72\x72\x6f\x72\x3a\x20" + _0x7060b079(_0xcb54644c), _0xf3b22a07.error);
        else _0xfe2bf078("\x43\x6f\x64\x65\x20\x65\x78\x65\x63\x75\x74\x65\x64", _0xf3b22a07._0xb123386c);
    }
});

_0xf9d4fc08.MouseButton1Click.Connect(() => {
    _0x6a5f1a1c.Text = "";
    _0xfe2bf078("\x4e\x6f\x74\x65\x70\x61\x64\x20\x63\x6c\x65\x61\x72\x65\x64");
});




UserInputService.InputBegan.Connect((_0xbd4ed055, _0x53f41a50) => {
    if (_0x53f41a50) return;
    if (_0xbd4ed055.KeyCode === Enum.KeyCode.RightShift) {
        if (_0x88c5a517.Visible) {
            _0xb57b617b(_0x88c5a517, _0x8dec1c76(0.2), { Size: new UDim2(0x0, 0x0, 0x0, 0x0), Position: new UDim2(0.5, 0x0, 0.5, 0x0) });
            _0x09dc8f71.delay(0.22, () => { _0x88c5a517.Visible = !1; });
        } else {
            _0x88c5a517.Visible = !0;
            _0x88c5a517.Size = new UDim2(0x0, 0x0, 0x0, 0x0);
            _0x88c5a517.Position = new UDim2(0.5, 0x0, 0.5, 0x0);
            _0xb57b617b(_0x88c5a517, _0x8dec1c76(0.25), { Size: new UDim2(0x0, 0x2a8, 0x0, 0x1cc), Position: new UDim2(0.5, -0x154, 0.5, -0xe6) });
        }
    }
    if (_0xbd4ed055.KeyCode === Enum.KeyCode.RightControl) {
        _0x88c5a517.Visible = !_0x88c5a517.Visible;
    }
});


_0xfe2bf078("\x68\x55\x55\x62\x20\x76\x32\x20\x6c\x6f\x61\x64\x65\x64\x20\x20\xe2\x80\x94\x20\x52\x69\x67\x68\x74\x53\x68\x69\x66\x74\x20\x74\x6f\x20\x74\x6f\x67\x67\x6c\x65", _0xf3b22a07._0xb123386c);
