var express = require("express");
const mongoose = require("mongoose");
require("validator");
const cors = require('cors');

var menSchema = new mongoose.Schema({
    firstname:{
        type:String ,
        trim : true ,
        required : true
    },
    lastname:{
        type:String ,                                                                                         
        trim : true ,
        required : true
    },
    city:{
        type:String,
        trim : true ,
        enum : ["SURAT" , "VADODARA" , "RAJKOT" , "BHAVNAGAR" , "JAMNAGAR" , "GANDHINAGAR" , "JUNAGADH" , "ANAND" , "NAVSARI" , "MORBI" , "NADIYAD" , "SURENDRANAGAR" , "BHARUCH" , "MEHSANA" , "BHUJ" , "PORBANDAR" , "PALANPUR" , "VALSAD" , "VAPI" , "GONDAL" , "GODHRA" , "PATAN" , "DAHOD" , "BOTAD" , "AMRELI" , "DEESA" , "JETPUR"],
        required : true ,
        uppercase: true ,
    }

});

var MenRanking = new mongoose.model("MenRanking" , menSchema );

module.exports = MenRanking ;