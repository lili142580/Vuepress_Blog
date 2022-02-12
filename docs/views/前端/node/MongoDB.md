---
title: Node.js的MongoDB数据库
date: 2022-2-11
sidebar: auto
tags:
 - 前端
 - node
categories:
 - node
---
# MongoDB
## 关系型和非关系型数据库
### 关系型数据库（表就是关系，或者说表与表之间存在关系）。
- 所有的关系型数据库都需要通过sql语言来操作
- 所有的关系型数据库在操作之前都需要设计表结构
- 而且数据表还支持约束
  - 唯一的
  - 主键
  - 默认值
  - 非空

## 非关系型数据库
- 非关系型数据库非常的灵活
- 有的关系型数据库就是key-value对儿
- 但MongDB是长得最像关系型数据库的非关系型数据库

# 安装
- 下载
 - 下载地址:[https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)
- 安装 
```js
npm i mongoose
```
- 配置环境变量
- 最后输入mongod --version测试是否安装成功

# 启动和关闭数据库
- 启动
```js
// mongodb 默认使用执行mongod 命令所处盼复根目录下的/data/db作为自己的数据存储目录
// 所以在第一次执行该命令之前先自己手动新建一个 /data/db
mongod
```
- 如果想要修改默认的数据存储目录，可以：
```js
mongod --dbpath = 数据存储目录路径
```
- 停止：
```js
在开启服务的控制台，直接Ctrl+C;
或者直接关闭开启服务的控制台。
```