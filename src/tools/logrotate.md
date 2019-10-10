# Logrotate

轮转日志。

## 配置文件

- `/etc/logrotate.conf`
- `/etc/logrotate.d/*`

## 配置指令

- `compress`: 压缩老日志文件
- `create mode owner group`: 指定轮转文件属性
- `daily`: 每天轮转一次
- `dateext`: 添加 `YYYYMMDD` 后缀，而不是数字
- `delaycompress`: 下一次轮转时再压缩此次轮转的日志
- `missingok`: 日志文件不存在时不报错
- `notifempty`: 日志为空时不轮转
- `rotate count`: 保留 `count` 个老文件
- `size size`: 只要日志文件大于 `size` 字节就轮转，支持 `k`、`M` 和 `G` 单位

> 参考于 <https://linux.die.net/man/8/logrotate>。

## 自动轮转

`/etc/cron.daily/logrotate` 让 `logrotate` 每天调用一次。

## 手动轮转

```sh
logrotate -f /etc/logrotate.conf
```
