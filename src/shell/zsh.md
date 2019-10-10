# Zsh

## $PATH

```sh
cat << 'EOF' >> ~/.zshenv
typeset -U PATH path
path=("$HOME/.local/bin" "$HOME/.yarn/bin" "$path[@]")
export PATH
EOF
```

> 参考于 <https://wiki.archlinux.org/index.php/Zsh#Configuring_$PATH>。
