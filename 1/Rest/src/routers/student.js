var express = require("express");
var router = new express.Router();

router.get("/nikx" , (req,res) => {
    res.send("Routing is successful");
});

// app.patch("/Students/:_id" , async (req,res) => {
    router.patch("/Students/:id" , async (req,res) => {

        try{
            // var id = req.params ;
            // var ids = await req.params._id ;
            var ids = await req.params.id ;
            console.log(ids);
            // res.send(ids);
            var updateStudentData = await Student.findByIdAndUpdate({_id:ids} , req.body , {
                new : true
            });
            // var studentData = await Student.find({name:ids});
    
               if(! updateStudentData){
                return res.status(404).send();
               }else{
                res.send(updateStudentData);
               }
    
            // res.send(studentData);
        }catch(err){
            res.send(err);
        }
    });

module.exports = router;