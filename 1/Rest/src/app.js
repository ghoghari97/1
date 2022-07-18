var express = require("express");
var app = express();
var mongoose = require("mongoose");
var validator = require("validator");
var port = 8000 ;
// var port = process.env.port || 3000 ;

require("./db/connection");

var Student = require("./models/student");

app.use(express.json());

var router = new express.Router();

router.get("/nik" , (req,res) => {
    res.send("Routing is successful");
});

// app.use(router);

var studentRouter = require("./routers/student");
app.use(studentRouter);

app.get( "/" , (req,res) => {
    res.send("Hi");
});

app.post( "/Students" , (req,res) => {
    res.send("Hi");

    var user = new Student(req.body);
    console.log(user);
    user.save().then( () => {
        res.status(201).send(user);
        // res.status(201);
        // res.send(user);
    });
});

app.post( "/Students" , async (req,res) => {

    var user = new Student(req.body);

    try{
        var createUser = await user.save();
            res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }});

app.get("/Students" , async (req,res) => {

    try{
        var studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }
});

// app.get("/Students/:_id" , async (req,res) => {
app.get("/Students/:_id" , async (req,res) => {

    try{
        // var id = req.params ;
        // var ids = await req.params._id ;
        var ids = await req.params._id ;
        console.log(ids);
        // res.send(ids);
        // var studentData = await Student.find({_id:ids});
        var studentData = await Student.find({name:ids});

           if(! studentData){
            return res.status(404).send();
           }else{
            res.send(studentData);
           }

        // res.send(studentData);
    }catch(err){
        res.send(err);
    }
});

// app.delete("/Students/:_id" , async (req,res) => {
//     try{
//         var ids = await req.params._id ;
//         console.log(ids);
//         // Student.find({name:ids});
//         var deleteStudent = Student.findByIdAndDelete({_id:ids});
//         // var deleteStudent = Student.find({name:ids}).deleteOne({name:ids});
//         if(!ids){
//             return res.stutus(404).send();
//         }else{
//             res.delete(deleteStudent);
//         }
//     }catch(err){
//         res.status(500).send(err);
//     }
// })

// app.delete("/Students/:_id" , async (req,res) => {
    app.delete("/Students/:_id" , async (req,res) => {

        try{
            // var id = req.params ;
            // var ids = await req.params._id ;
            var ids = await req.params._id ;
            console.log(ids);
            // res.send(ids);
            var studentData = await Student.findByIdAndDelete({_id:ids});
            // var studentData = await Student.find({name:ids});
    
               if(! studentData){
                return res.status(404).send();
               }else{
                res.send(studentData);
               }
    
            // res.send(studentData);
        }catch(err){
            res.send(err);
        }
    });

// // app.patch("/Students/:_id" , async (req,res) => {
//     app.patch("/Students/:id" , async (req,res) => {

//         try{
//             // var id = req.params ;
//             // var ids = await req.params._id ;
//             var ids = await req.params.id ;
//             console.log(ids);
//             // res.send(ids);
//             var updateStudentData = await Student.findByIdAndUpdate({_id:ids} , req.body , {
//                 new : true
//             });
//             // var studentData = await Student.find({name:ids});
    
//                if(! updateStudentData){
//                 return res.status(404).send();
//                }else{
//                 res.send(updateStudentData);
//                }
    
//             // res.send(studentData);
//         }catch(err){
//             res.send(err);
//         }
//     });

app.listen(port , () => {
    console.log("Okay");
});



