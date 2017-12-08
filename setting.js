module.exports = {
    cookieSecret:'sxd',//加密cookie使用的字符串
    db:'blog',//数据库的名称
    host:'localhost',//数据库的地址
    port:27017//数据库的端口号
}
//我们把数据可的配置信息写在这里，是为了在连接数据库的时候，
// 一旦数据库的地址或者是名称或者是端口发生改变时，我们只需要改这里就可以