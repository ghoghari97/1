var express = require("express");
var app = express();
var mongoose = require("mongoose");
var validator = require("validator");
var port = 8000 ;
// var port = process.env.port || 3000 ;

require("./db/connection")

app.get( "/" , (req,res) => {
    res.send("Hi");
});

app.post( "/index" , (req,res) => {
    res.send("Hi");
});

app.listen(port , () => {
    console.log("Okay");
});



