// 引入node中的http
const http = require("http");
// 创建服务器
const server = http.createServer();

server.on("request",(req,res)=>{
    const url = req.url
    res.writeHeader(200,{"content-Type":"text/html;charset=utf8"});
    if(url === "/" || url === "/index.html"){
        res.end("首页")
    }else if(url === "/movie.html"){
        res.end("电影")
    }else if(url === "/about.html"){
        res.end("关于")
    }else{
        res.end("未找到页面")
    }

})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server running at http://127.0.0.1:3000");
    
})