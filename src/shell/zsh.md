# Zsh

## 设为登录 Shell

```sh
chsh -s /usr/bin/zsh
```

## Antibody

### 安装

```sh
# Arch Linux
yay -S antibody

# Ubuntu
nix-env -iA nixpkgs.antibody
```

### 更新插件

```sh
antibody bundle < ~/.config/antibody/zsh_plugins.txt > ~/.config/antibody/zsh_plugins.sh
```

### 删除插件

```sh
antibody purge olivierverdier/zsh-git-prompt
```

## $PATH

```sh
cat << 'EOF' >> ~/.zshenv
typeset -U PATH path
path=("$HOME/.local/bin" "$HOME/.yarn/bin" "$path[@]")
export PATH
EOF
```

> 参考于 <https://wiki.archlinux.org/index.php/Zsh#Configuring_$PATH>。

## for 循环

```sh
for i in {0..9}; do echo "$i"; done
```

## zsh-newuser-install

```sh
autoload -U zsh-newuser-install
zsh-newuser-install -f
```
