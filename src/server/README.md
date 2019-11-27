# Nginx

## 正则匹配

- `~`: 表示大小写敏感的正则匹配
- `~*`: 表示大小写不敏感的正则匹配

> 参考于 <http://nginx.org/en/docs/http/ngx_http_core_module.html#location>。

## try_files

vue-router 使用 `history` 模式时，为了避免刷新子路径时出现 `404`，需要在
`try_files` 的最后面加上 `/index.html`，比如：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

> 参考于 <https://router.vuejs.org/guide/essentials/history-mode.html#nginx>。

## map

- 需要用在 `http` 里

例子：

```nginx
map $http_user_agent $root_dir {
    default "/var/www/html/a/";
    ~*(mobile|iphone|ipad|android) "/var/www/html/b/";
}
```

> 参考于 <https://nginx.org/en/docs/http/ngx_http_map_module.html>。

## if

- 尽量不要用 `if`
- `if` 会导致 `try_files` 不工作
- 可以考虑使用 `map`

> 参考于 <https://www.nginx.com/resources/wiki/start/topics/depth/ifisevil/>。
