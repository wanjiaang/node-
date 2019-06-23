const http = require("http");
const fs = require("fs")
const path = require("path")

// 创建服务器
const sever = http.createServer();

sever.on("request", (req, res) => {
    const url = req.url;
    res.writeHeader(200,{"content-Type":"text/html;charset=utf8"});
    if (url === "/" || url === "/index.html") {
        fs.readFile(path.join(__dirname,"./view/index.html"),"utf8", (err,data) => {
            if(err) throw err;
            res.end(data)
        })
    }else if(url === "/movie.html"){
        fs.readFile(path.join(__dirname,"./view/movie.html"),(err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }else if(url === "/about.html"){
        fs.readFile(path.join(__dirname,"./view/about.html"),(err,data)=>{
            if(err) throw err;
            res.end(data)
        })
    }else{
        res.end("加载失败")
    }
})

sever.listen(3000, () => {
    console.log("sever running at http://127.0.0.1:3000");

})