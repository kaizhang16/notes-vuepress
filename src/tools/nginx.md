# Nginx

## 安装

```sh
# 下载代码
curl -O http://nginx.org/download/nginx-1.16.1.tar.gz \
  && tar xzvf nginx-1.16.1.tar.gz
curl -O https://ftp.pcre.org/pub/pcre/pcre-8.43.tar.gz \
  && tar xzvf pcre-8.43.tar.gz
curl -O http://zlib.net/zlib-1.2.11.tar.gz \
  && tar xzvf zlib-1.2.11.tar.gz
curl -L https://github.com/fdintino/nginx-upload-module/archive/2.3.0.tar.gz \
  -o nginx-upload-module-2.3.0.tar.gz \
  && tar xzvf nginx-upload-module-2.3.0.tar.gz

# 编译安装
cd nginx-1.16.1/
./configure \
  --sbin-path=/usr/sbin/nginx \
  --conf-path=/etc/nginx/nginx.conf \
  --pid-path=/run/nginx.pid \
  --with-http_ssl_module \
  --with-http_stub_status_module \
  --with-pcre=../pcre-8.43 \
  --with-zlib=../zlib-1.2.11 \
  --add-module=../nginx-upload-module-2.3.0
make
make install
```
