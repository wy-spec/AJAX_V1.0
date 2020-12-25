//1.引入express
const express = require('express');
//2.创建引用对象
const app = express();
//3.创建路由规则
app.get('/server',(request , response)=>{
    //设置请求头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('你好')
})
app.listen(8080 ,()=>{
    console.log('8080请求访问')
});