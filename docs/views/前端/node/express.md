---
title: Node.js的Express框架
date: 2022-2-11
sidebar: auto
tags:
 - 前端
 - node
categories:
 - node
---
# Express
- [http://expressjs.com/](http://expressjs.com/),其中主要封装的是http。
- 使用
```js
// 1 安装
// 2 引包
var express = require('express');
// 3 创建服务器应用程序
//      也就是原来的http.createServer();
var app = express();

// 公开指定目录
// 只要通过这样做了，就可以通过/public/xx的方式来访问public目录中的所有资源
// 在Express中开放资源就是一个API的事
app.use('/public/',express.static('/public/'));

//模板引擎在Express中开放模板也是一个API的事

// 当服务器收到get请求 / 的时候，执行回调处理函数
app.get('/get',function(req,res){
    res.send('hello express');
})

//当你以post方法请求/的时候，执行对应的处理函数
app.post('/post',function(req,res){
    res.send('hello world');
})
// 相当于server.listen
app.listen(3000,function(){
    console.log('app is runing at port 3000');
})
```
## Express静态服务API
```js
// app.use不仅仅是用来处理静态资源的，还可以做很多工作(body-parser的配置)
app.use(express.static('public'));

app.use(express.static('files'));

app.use('/stataic',express.static('public'));
```
```js
// 引入express
var express = require('express');

// 创建app
var app = express();

// 开放静态资源
// 1.当以/public/开头的时候，去./public/目录中找对应资源
// 访问：http://127.0.0.1:3000/public/login.html
app.use('/public/',express.static('./public/')); 

// 2.当省略第一个参数的时候，可以通过省略/public的方式来访问
// 访问：http://127.0.0.1:3000/login.html
// app.use(express.static('./public/'));   

// 3.访问：http://127.0.0.1:3000/a/login.html
// a相当于public的别名
// app.use('/a/',express.static('./public/')); 

//  
app.get('/',function(req,res){
    res.end('hello world');
});

app.listen(3000,function(){
    console.log('express app is runing...');
});
```
## 在Express中获取表单请求数据
```js
// 通过requery方法获取用户输入的数据
// req.query只能拿到get请求的数据
 var comment = req.query;
```
## 在Express中没有内置获取表单post请求体的api，这里我们需要使用一个第三方包body-parser来获取数据。

```js
//安装
npm install --save body-parser;


```
- 配置：配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
```js
var express = require('express')
// 引包
var bodyParser = require('body-parser')

var app = express()

// 配置body-parser
// 只要加入这个配置，则在req请求对象上会多出来一个属性：body
// 也就是说可以直接通过req.body来获取表单post请求数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```
- 使用
```js
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  // 可以通过req.body来获取表单请求数据
  res.end(JSON.stringify(req.body, null, 2))
})
```