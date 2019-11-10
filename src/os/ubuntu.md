# Ubuntu

## 修改镜像源

[https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)。

## 显卡

```sh
ubuntu-drivers devices
```

## 窗口管理器

```sh
sudo add-apt-repository ppa:monettes/i3wm-gaps
sudo apt update
sudo apt install i3-wm

# sudo apt install i3
```

## 文本编辑器

```sh
sudo snap install --classic code
```

## Shell

```sh
sudo apt install zsh

# sudo apt install fish
# sudo chsh -s /usr/bin/fish
```

## Nix

```sh
sudo apt install curl
curl https://nixos.org/nix/install | sh
```

## 基本工具

```sh
sudo apt install autoconf
sudo apt install libdbus-glib-1-dev libssl-dev
sudo apt install ppa-purge python3-pip
sudo apt install variety xcompmgr xsel

nix-env -iA nixpkgs.bat nixpkgs.curl nixpkgs.dos2unix
nix-env -i feh fish fzf
nix-env -iA nixpkgs.ghc
nix-env -iA nixpkgs.gitAndTools.gitFull
nix-env -iA nixpkgs.gnupg nixpkgs.gopass
nix-env -iA nixpkgs.htop
nix-env -iA nixpkgs.i3status-rust nixpkgs.imagemagick
nix-env -iA nixpkgs.jq
nix-env -iA nixpkgs.rofi
nix-env -i rustup tmux xclip

pip3 install --user tmuxp
```

## 输入法

- 安装`汉语`支持
- 选择 `fcitx` 输入系统
- 下载 `deb` 包
- `sudo apt install ./xxx.deb`
- 在 `Input Method` 里添加 `Sogou Pinyin`（注意：取消选中“只显示当前语言”）

## 浏览器

```sh
sudo snap install firefox
```

## 字体

### 苏新诗柳楷

```sh
cp -i ~/share/fonts/方正苏新诗柳楷简体.ttf ~/.local/share/fonts/
cp -i ~/share/fonts/方正苏新诗柳楷繁体.ttf ~/.local/share/fonts/
```

### Inconsolata

```sh
nix-env -iA nixpkgs.inconsolata
cp -i ~/.nix-profile/share/fonts/truetype/inconsolata/Inconsolata-* ~/.local/share/fonts
```

### Source Code Pro

```sh
nix-env -iA nixpkgs.source-code-pro
cp -i ~/.nix-profile/share/fonts/opentype/SourceCodePro-* ~/.local/share/fonts/
```

## 终端

```sh
sudo snap install --classic alacritty
```

## apt

```sh
sudo ppa-purge ppa:whatever/ppa  # 删除 ppa
sudo add-apt-repository --remove ppa:kgilmer/speed-ricer  # 删除 ppa（更粗暴）
sudo apt upgrade  # 升级软件
```

## docker

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## 常用工具

### 排版

```sh
nix-env -i pandoc
nix-env -iA nixpkgs.haskellPackages.pandoc-citeproc
nix-env -iA nixpkgs.haskellPackages.pandoc-crossref
nix-env -iA nixpkgs.texlive.combined.scheme-full
sudo pip3 install pandocfilters
```

### pdf

```sh
nix-env -iA nixpkgs.evince
```

### 音视频

```sh
sudo apt install ubuntu-restricted-extras  # 编解码器
```

### 截图

```sh
nix-env -iA nixpkgs.deepin.qt5dxcb-plugin
nix-env -iA nixpkgs.deepin.deepin-screenshot
```

### 翻译

```sh
sudo apt install goldendict
```

### 同步

```sh
# Add the release PGP keys:
curl -s https://syncthing.net/release-key.txt | sudo apt-key add -

# Add the "stable" channel to your APT sources:
echo "deb https://apt.syncthing.net/ syncthing stable" | sudo tee /etc/apt/sources.list.d/syncthing.list

# Update and install syncthing:
sudo apt-get update
sudo apt-get install syncthing
```

### 任务管理

```sh
nix-env -iA nixpkgs.taskwarrior

# sudo apt-get install taskwarrior
```

## 编程语言

### Java

```sh
sudo apt install openjdk-8-jdk
nix-env -iA nixpkgs.maven
```

### Python

```sh
sudo apt install python3-dev python-dev
```
