// 1.安装express
// 2.返回express.Router实例
// 3.router.get()
// 4.导出router
// 5.在入口app.js挂载路由

var express = require('express')
var router = express.Router()

// 首页路由
// 渲染首页
var index = require('./controllers/index')
router.get('/',index.showIndex)

// 用户路由
var user = require('./controllers/user')
router
        // 渲染登录页面   
     .get('/signin',user.showSingnin)
    //   处理登录请求
    .post('/signin', user.handleSignin)
    //   渲染注册页面
    .get('/signup', user.showSignup)
    //   处理注册请求
    .post('/signup', user.handleSignup)
    //   处理退出请求
 

// 话题路由

       // 渲染发布话题页面
     
       // 处理发布请求请求
      
      //   渲染话题详情页面
      
    //   渲染编辑话题页面
  
    //   处理编辑话题请求
     
    //   处理删除话题请求
    
      
module.exports = router
