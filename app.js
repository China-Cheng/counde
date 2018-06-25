// 程序入口

// 引包
var express = require('express')
var app = express()
// 引入路由router
var router = require('./router')


// 监听服务器
app.listen(3000, () => {
    console.log('go')
})

// 挂载路由
app.use(router)