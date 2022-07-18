var express = require("express");
var app = express();
var port = process.env.PORT || 3000 ;
require("../db/conn");
const cors= require('cors');
var MenRanking = require("../models/mens");

app.get("/home",async (req,res)=>{
    res.send("this is home page");
});

app.use(express.json());
app.use(cors({
    origin:" http://localhost:3000"
}))

app.post( "/mens" , async (req,res) => {

    try{
        var addingMensRecords = new MenRanking (
            {
            "firstname":"anuj",
            "lastname":"sharma",
            "city":"Surat"
        },

        // req.body

        );

        addingMensRecords.save();

        console.log(addingMensRecords);

    }catch(e){
        res.status(400).send(e);
    }});

    // app.post( "/mens" , async (req,res) => {

    //     var addingMensRecords = new MenRanking(req.body);
    //     console.log(addingMensRecords);
    
    //     try{
    //         var insertMens = await addingMensRecords.save();
    //             res.status(201).send(insertMens)
    //             res.send(insertMens);
    //     }catch(e){
    //         res.status(400).send(e);
    //     }});

        app.get("/Students" , async (req,res) => {

            try{
                var studentsData = await MenRanking.find();
                res.send(studentsData);
            }catch(err){
                res.send(err);
            }
        });

app.listen(port ,'0.0.0.0', ()=>{
    console.log("okay");
});