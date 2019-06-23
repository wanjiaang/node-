const http = require("http");
const fs = require("fs");
const path = require("path");
// 创建服务器
const sever = http.createServer();

sever.on("request",(req,res)=>{
    let url = req.url;
    // plain文本
    // res.writeHeader(200,{"content-Type":"text/html;charset = utf8"});

    if(url === "/") url = "/view/index.html";
    fs.readFile(path.join(__dirname,url),"utf8",(err,data)=>{
        if(err) return res.end("加载失败");
        res.end(data)
    })
})
// 监听
sever.listen(3000,()=>{
    console.log("sever running at http://127.0.0.1:3000");
    
})
