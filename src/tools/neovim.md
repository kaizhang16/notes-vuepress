# Neovim

## 安装

```sh
# 安装 neovim
nix-env -iA nixpkgs.neovim

# 安装插件管理器
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

## diff

```sh
nvim -d file1 file2 [file3 [file4]]
```
