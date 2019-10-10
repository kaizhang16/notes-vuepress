# Nix

## nix-env

```sh
nix-env -qaP '.*(firefox|chromium).*'  # 查找软件
nix-env -iA nixpkgs.hello  # 安装软件
```

## channel

```sh
nix-channel --add https://nixos.org/channels/nixpkgs-unstable nixpkgs  # 添加 channel
nix-channel --list  # 列出 channel
nix-channel --update  # 更新 channel
```
