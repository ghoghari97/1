var mongoose = require("mongoose");
var validator = require("validator");

var studentSchema = new mongoose.Schema({
    serial : {
        type : Number,
        unique : [true , "serial number already present"] ,
    },
    name : {
        type : "string"  ,
        trim : true ,
        required : true},
    gmail : {
        type : "string"  ,
        trim : true ,
        required : true ,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Email is not valid");
            }
        }},
    number : {
        type : Number ,
        trim : true ,
        // minlength : 10 ,  
        // maxlength : 12 ,  // not working
        required : true 
    },
    address : {
        type : String ,
        trim : true ,
        required : true
    },
    age: { type : Number,
           trim : true ,
           validate(value){
            if(value<0){
                throw new Error('invalid age');
            }
           }
    },
    grade: { type : String ,
    uppercase: true ,
    enum : ["AA" , "AB" , "BB" , "BC" , "CC" , "CD" , "DD" , "FF"],
    trim : true ,
    }})

    var Student = new mongoose.model("Student",studentSchema);

    // var a = async () => {
    //     try{

    //         var add = new Student({
    //             serial: 2 ,
    //             name : "jkk",
    //             gmail : "abc@gmail.com",
    //             number : 9876543210,
    //             address : "nug" ,
    //             age : 22 ,
    //             grade : "AA"
    //         })

    //     var b = await Student.insertMany([add]);

    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    // a();

    module.exports = Student ;