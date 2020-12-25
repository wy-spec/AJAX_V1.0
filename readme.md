# AJAX简介：
AJAX 全称为Asynchronous JavaScript And XML ,就是异步的JS 和 XML，通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势无刷新获取数据，
Ajax 不是新的编程语言而是一种组合
## 请求报文
```
重点是格式和参数
行 POST /s?ie=UTF-8 HTTP/1.1
头   Host: ...
    Cookie: name=guigu
    Content-Type: ...
    User-Agent chrome 83
空行
体  参数...
```
## 响应报文
```
行
        HTTP/1.1 200 OK
头      Content-Type: text/html;charset=utf-8
        Content-length:2048
        Content-encoding:12
空行  
体
    返回的返回体
    html代码
```
* 404
* 403
* 401
* 500
* 200

## 安装node.js
## 了解Express
``
npm init --yes 初始化
npm i express 安装express
``


