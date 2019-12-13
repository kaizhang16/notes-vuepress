# SSH

## 生成 SSH 密钥对

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

## 查看公钥指纹

```sh
ssh-keygen -E md5 -lf id_rsa.pub
```

## FAQ

### Access denied for a particular user by PAM account configuration

参考
<https://unix.stackexchange.com/questions/335215/access-denied-for-a-particular-user-by-pam-account-configuration>
修改 `/etc/security/access.conf`。
