// 1.安装express
// 2.返回express.Router实例
// 3.router.get()
// 4.导出router
// 5.在入口app.js挂载路由

var express = require('express')
var router = express.Router()
var user = require('./controllers/user')
var topic = require('./controllers/topic')
var index = require('./controllers/index')
// 首页路由
// 渲染首页
router.get('/',index.showIndex) 

// 用户路由
router
        // 渲染登录页面   
      .get('/signin',user.showSingnin)
    //   处理登录请求
      .post('/signin',user.handleSignin)
    //   渲染注册页面
      .get('/signin',user.showSignup)
    //   处理注册请求
      .post('/signin',user.handleSignup)
    //   处理退出请求
      .post('/signin',user.handleSignout)
      
      

// 话题路由
router
       // 渲染发布话题页面
      .get('/topic/:topicID',topic.showTopic)
       // 处理发布请求请求
      .post('/topic/:topicID',topic.handleTopic)
      //   渲染话题详情页面
      .get('/topic/:topicID',topic.showTopicID)
    //   渲染编辑话题页面
      .get('/topic/:topicID/edit',topic.showEdit)
    //   处理编辑话题请求
      .post('/topic/:topicID/edit',topic.handleTopicID)
    //   处理删除话题请求
      .post('/topic/:topicID/delete',topic.handleDelete)
      
      

module.exports = router
