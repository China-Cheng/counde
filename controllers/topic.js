// 话题路由

       // 渲染发布话题页面
exports.showTopic = (req,res) => {
    res.send('showTopic')
}
       // 处理发布请求请求
exports.handleTopic = (req,res) => {
    res.send('handleTopic')
}
      //   渲染话题详情页面
exports.showTopicID = (req,res) => {
    res.send('showTopicID')
}
    //   渲染编辑话题页面
exports.showEdit = (req,res) => {
    res.send('showEdit')
}
    //   处理编辑话题请求
exports.handleTopicID = (req,res) => {
    res.send('handleTopicID')
}
    //   处理删除话题请求
exports.handleDelete = (req,res) => {
    res.send('handleDelete')
}
