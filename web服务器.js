// 导入http模块
const http = require("http")

// 创建服务器
const server = http.createServer();

// 监听浏览器请求
server.on("request",function(req,res){

    res.writeHeader(200,{"content-Type":"text/html;charset=utf8"});
    res.end("<h1>你好,世界</h1>");
})

// 开启服务器
server.listen(3000,"127.0.0.1",function(){
    console.log("server running at http://127.0.0.1:3000");
    
})
