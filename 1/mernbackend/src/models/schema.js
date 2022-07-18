var mongoose = require("mongoose");
// var express = require("express");
var validator = require("validator");

var firstSchema = new mongoose.Schema({
    firstname:{
    type:String,
    required : true
    },
    lastname:{
    type:String,
    required : true
    }
})

const Register = new mongoose.model("Register",firstSchema);

module.exports = Register ; 

