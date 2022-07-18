// index.js file deleted so please

mongoose = require("mongoose");
validator = require("validator");
mongoose.connect('mongodb://localhost:27017/nikunj').
then( () => console.log("connection sucessfully"))
.catch( (err) => console.log(err));

// var playlistSchema = new mongoose.Schema({
//     video : "number" ,
//     tech : "string"})

var playlistSchema = new mongoose.Schema({
    Email : {
        type : "string"  ,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Email is not valid");
            }
        }
    },
    // video : "Number" ,
    video : {
        type : "number" ,
        validate(value){
            if(value < 0){
                throw new error("video number is not negative");
            }
        }  // using this we are not get error message in terminal 
        // validate:{
        //     validator:function(value){
        //         return value.length < 0
        //     },
        //     message:"video number is not negative"
        // }  // but using this we are get error message in terminal

    },  // we are get error if we are add negative value in video number using custom vbalidation 
    tech: { type : "string" ,
    lowercase : true ,
    trim : true ,
    // minlength : 3 ,
    minlength : [3 , " min 3 letter "],  // we are get custom error
    maxlength : 15 ,
    enum : ["backend" , "front" , "javascript"] }
    })  // we are use here lowercase , trim validator

var Playlist = new mongoose.model("Playlist",playlistSchema);

var d = async () => {
    
    try{
    
        // var html = new Playlist({
        //       Email : "Front@gmail.com",
        //     video : 21 ,
        //     tech : "        Front                                                               "})
        
        var html = new Playlist({
            Email : "Front@gmail.com",
            video : 10 ,
            tech : "Front"})
    
        var css = new Playlist({
            Email : "Backend@gmail.com",
            video : -25 ,
            tech : "Backend"})

        // var css = new Playlist({
        //     Email : "@gmail.com" ,
        //     video : 22,
        //     tech : "database"})  // here we are get enum validation error

        // var js = new Playlist({
        //     Email : "javascript@gmail.com",
        //     video : -2,  
        //     // tech : "j"}) // length are out of range min length
        //     tech : "javascript"})
            
        var js = new Playlist({
            Email : "javascript@gmail.com" ,
            video : 5,  
            // tech : "j"}) // length are out of range min length
            tech : "javascript"})
        
        var e = await Playlist.insertMany([html,css,js]);
        // console.log(e);
    
        }catch(error){
            console.log(error);
        }
    }
    
    d();
    
     
    
    const getDocument = async() =>{
      // var b = await Playlist.find({});
      // var b = await Playlist.find({language : "css"}); // speciallly focus small and capital
      // var b = await Playlist.find({language : "css"}).select({language:0});
    // var b = await Playlist.find({video : { $gte : 21}});
    // // .select()
    // // .limit();
    // console.log(b);
    // var c = await Playlist.find({video : { $gt : 21}})
    // console.log(c);

    // var d = await Playlist.find({video : { $lt : 22}})
    // console.log(d);

    // var e = await Playlist.find({video : { $lte : 22}})
    // console.log(e);

    // var c = await Playlist.find({ $or : [ { $lt : 22 } , {$eq : 22}]}).count()  // logical operator  // count function 
    var c = await Playlist.find({ $or : [ { $lt : 22 } , {$eq : 22}]}).sort("video : 1")
    console.log(c);
    
    }
    
    getDocument();

// in comparison operator in and not in multi.js files

///////////////////////////////////////////////////////update//////////////////////////////////////////////////

var updateDocument = async (_id) => {
    // var a = await Playlist.updateOne({_id} , {
    //     $set : {
    //         video : "222" 
    //     }
    // });

    try{
        var a = await Playlist.updateOne({_id} , {
        $set : {
            video : "222" }
        //     ,{
            // new: true ,
        //    usefindandmodify :false
        // }
    });
    }catch(err){
        console.log(err);
    }
}

// we are also use findbyidandupdate alternate to updateOne . but findbyidandupdate are old versions so we are get error  
// and if our requirements is priority then write usefindmodify lines please
// we are show in console bar old date if our requirements are updated data then write new: true line

// var updateDocument = async (id) => {
//     var a = await Playlist.updateOne({_id : id});
// }

// var updateDocument = async (id) => {
//     var a = await Playlist.updateOne({_id : "62b2f55d97e09803fd0ed8b9"});
// }

updateDocument("62b2fc2a9048626f7a6a9bfb");
