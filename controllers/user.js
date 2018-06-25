var mysql  = require('mysql');  

var connection = mysql.createConnection({     
 host     : 'localhost',       
 user     : 'root',              
 password : 'root',       
 database: 'posts', 
}); 

connection.connect();
// 用户路由

// 渲染登录页面   
exports.showSingnin = (req,res) => {
    res.render('signin.html')
}
//   处理登录请求
exports.handleSignin = (req,res) =>{
    res.render('signup.html')
}
    //   渲染注册页面
exports.showSignup = (req,res) => {
    res.render('signup.html')
}
    //   处理注册请求
exports.handleSignup = (req,res) => {
    var body = req.body
    var sqlStr = 'INSERT INTO `users` SET ?'
    connection.query(sqlStr, body,
        function(error, results) {
            if (error) throw error;
            // console.log('The solution is: ', results[0].solution);
            // [ RowDataPacket { solution: 2 } ]
            console.log(results); // []
        });    
    res.render('signin.html')
}
     // 2.服务端 获取到表单数据
    //         1.1获取到请求体中 req.body中的数据
    //         1.2验证
    //             1.2.1验证格式是否正确
    //             1.2.2验证数据库中是否有这个数据
    //         1.3把首页返回到前端

    //   处理退出请求

