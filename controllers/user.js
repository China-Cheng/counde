// 用户路由

// 渲染登录页面   
exports.showSingnin = (req,res) => {
    res.send('showSingnin')
}
//   处理登录请求
exports.handleSignin = (req,res) => {
    res.send('handleSignin')
}
    //   渲染注册页面
exports.showSignup = (req,res) => {
    res.send('showSignup')
}
    //   处理注册请求
exports.handleSignup = (req,res) => {
    res.send('handleSignup')
}
    //   处理退出请求
exports.handleSignout = (req,res) => {
    res.send('handleSignout')
}
