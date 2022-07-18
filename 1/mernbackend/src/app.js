var mongoose = require("mongoose");
var express = require("express");
var app = express();
var ejs = require("ejs");
var port = process.env.PORT || 3000 ;
var path = require("path");

require("../src/db/conn");
require("../src/models/schema");

app.use(express.static(path.join(__dirname,"../public")))

var ejs_folder_path = path.join(__dirname,"../templates")
var expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);
app.set('layout','exampless.ejs');  // by defaults layout file is change form examples.ejs 
app.set("view engine","ejs");  // set the view engine
app.set("views", ejs_folder_path );  //views folder is transfer into this 

app.get("/home", async (req, res) => {
    res.send("this is home page"); 
});
app.get("/index", async (req, res) => {
    res.render('layout'); 
});
app.listen(port, () => {
    console.log("okay");
});
