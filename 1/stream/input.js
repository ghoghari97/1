
// var a = require("fs");
// var b = require("http");

// var c = b.createServer();

// c.on("request" , (req , res) => {
//     // a.readFile( "input.txt" , (err,data )=> {
//     //     if(err) return console.error(err);
//     //     res.end(data.toString());
//     // })

//     /////////////////////////////////second method////////////////////////////////////////////////////////////

//     var d = a.createReadStream("input.txt");

//     rstream.on( 'data' , (chunkdata) =>{
//         res.write(chunkdata);
//     })
//     rstream.on('end' , () => {
//         res.end();
//     });
//     rstream.on("err" , (err) => {
//         console.log(err);
//         res.end("file not found");
//     });
// });

// c.listen(8000 , "127.0.0.1" , () => {
//     console.log("okay");
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require("fs");
var b = require("http");

var c = b.createServer();

c.on("request" , (req , res) => {
    // a.readFile( "input.txt" , (err,data )=> {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    var d = a.createReadStream("input.txt");

    d.on( 'data' , (chunkdata) =>{
        res.write(chunkdata);
    })
    d.on('end' , () => {
        res.end();
    });
    d.on("err" , (err) => {
        console.log(err);
        res.end("file not found");
    });
});

c.listen(8000 , "127.0.0.1" , () => {
    console.log("okay");
});
