
//Creating Server
/*const http = require("http");

const server = http.createServer((req, res)=>{
  res.end("Hello from the ranjeet side");
});


server.listen(8000,"127.0.0.1",()=>{
console.log("listinling on port 8000");
});

*/
const http = require("http");

const Server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url=="/"){
        res.end("Hello from Home sides ");
    }else if (req.url=="/about"){
        res.end("Hello from about side");
    }else if(req.url == "/contact"){
        res.end("Hello from the contactUs sides");
    }else{
        res.end("<h1>404 page not exits</h1>");
    }
});
Server.listen(8000,"127.0.0.1",()=>{
    console.log("listening on port no 8000");
});