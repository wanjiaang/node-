const http = require("http");

const path = require("path");
const template = require("art-template")

// 创建服务器
const server = http.createServer();
server.on("request",(req,res)=>{
    let url = req.url;
    let data = {
        name:"孙笑川",
        age:27,
        hobby:["嘴臭","御驾亲征","二齿缘"]
    }
    if(url === "/") {
       let html = template(path.join(__dirname,"view/1.html"),data)
       res.end(html)
    }
})

// 监听
server.listen(3000,()=>{
    console.log("server running at http://127.0.0.1:3000");
    
})