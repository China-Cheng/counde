// 程序入口

// 引包
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var art = require('express-art-template')

// 统一静态资源
app.engine('html', require('express-art-template'))
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))
// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 引入路由router
var router = require('./router')
// 挂载路由
app.use(router)

// 监听服务器
app.listen(3000,() => {
    console.log('go')
})