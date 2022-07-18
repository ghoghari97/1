var mongoose = require("mongoose");
var validator = require("validator");

var studentSchema = new mongoose.Schema({
    studentname : {
        type : "string"  ,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Email is not valid");
            }
        }
    },
    Chemarks : "Number" ,
    Physicsmarks : "string" , 
    matmarks: { type : "string" ,
    validate:{
        validator:function(value){
            return value.length < 0
        },
        message:"marks is not negative"
    }
    }
    })

    var Playlist = new mongoose.model("Playlist",studentSchema);