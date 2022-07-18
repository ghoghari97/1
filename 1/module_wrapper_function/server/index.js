var a = require("http");

// console.log(a);

var server = a.createServer((req,res) => {

    // res.end("we are get request");
    // console.log(req.url);

    if(req.url == "/"){
        res.end("we are get request from index"); 
    } else if (req.url == "/home"){
        // res.end("we are get request from home");
        res.write("we are get request from index");
        res.end();
    } else if (req.url == "/hi"){
        res.end("we are get request from hi");
    }else if (req.url == "/nik"){
        res.end(); 
        // } 
    }else{
        // res.writeHead(404);
        // res.end(" <h1> 404 error page . page does't exit </h1>");
        res.writeHead(404 , { "content-type":"text/html"});
        res.end(" <h1> 404 error page . page does't exit </h1>"); 
    }

}) ;

server.listen(8000,"127.0.0.1", () => {
    console.log("OKAY");
});