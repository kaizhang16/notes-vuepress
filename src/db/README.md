# MySQL

## 安装

### Ubuntu

```sh
curl -LO https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.13-1_all.deb
sudo apt update

sudo apt install mysql-server mysql-client
```

## 连接数据库

```sh
sudo mysql -u root -S /var/run/mysqld/mysqld.sock
```

## 操作数据库

### 创建数据库

```sql
CREATE DATABASE `to_create_database` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 增加列

```sql
ALTER TABLE `to_alter_table` ADD `to_add_column` VARCHAR(255) AFTER `column1`;
```

### 删除列

```sql
ALTER TABLE `to_alter_table` DROP COLUMN `to_delete_column`;
```

### 删除记录

```sql
DELETE FROM `table_name` [WHERE condition];
```

### 增加索引

```sql
ALTER TABLE `to_alter_table` ADD CONSTRAINT `username` UNIQUE INDEX (`username`);
```

### 删除索引

```sql
ALTER TABLE `to_alter_table` DROP INDEX `to_delete_index`;
```
