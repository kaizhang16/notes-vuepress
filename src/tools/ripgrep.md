# Ripgrep

## 安装

```sh
nix-env -iA nixpkgs.ripgrep
```

## 根据文件类型过滤

```sh
rg 'fn run' -g '*.rs'
# 或者
rg 'fn run' --type rust
# 或者
rg 'fn run' -trust
```
