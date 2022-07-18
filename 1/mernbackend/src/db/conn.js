var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ghoghari")
.then( ()=>{
    console.log("connect")
}).catch( (e)=>{
    console.log("no connect")
})