# SSH

## 生成 SSH 密钥对

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## 查看公钥指纹

```sh
ssh-keygen -E md5 -lf id_rsa.pub
```
