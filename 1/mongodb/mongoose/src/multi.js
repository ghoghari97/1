// use for multiple documents add in one line

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myapp').
then( () => console.log("connection sucessfully"))
.catch( (err) => console.log(err));

// var playlistSchema = new mongoose.Schema({
//     language : String
// })

// var Playlist = new mongoose.model("Playlist",playlistSchema);
  
//   var d = async () => {
  
//     try{
  
//         var html = new Playlist({
//             language : "html"},
//             {video : 21}) 
  
//         var css = new Playlist({
//             language : "css"},
//             {video : 22})
      
//       var e = await Playlist.insertMany([html,css]);
//       // console.log(e);
  
//     }catch(error){
//       console.log(error);
//     }
//   }
  
//   d();

var playlistSchema = new mongoose.Schema({
  language : String,
  lowercase : true })

var Playlist = new mongoose.model("Playlist",playlistSchema);

var d = async () => {

  try{

      var html = new Playlist({
          language : "HTML"}) 

      var css = new Playlist({
          language : "CSS"})
    
    var e = await Playlist.insertMany([html,css]);
    // console.log(e);

  }catch(error){
    console.log(error);
  }
}

d();

////////////////////////////////////read//////////////////////////////////////////////////////////////////////

// const getDocument = async() =>{
//   // var b = await Playlist.find({});
//   // var b = await Playlist.find({language : "css"}); // speciallly focus small and capital
//   // var b = await Playlist.find({language : "css"}).select({language:0});
//   var b = await Playlist.find({ language : { $in : ["html" ,"css"]}}).sort(" language : 1 ");  // comparison operator

// // nin are ulternate work upto in

//   // .select({language:0})
//   // .limit(2);
//   console.log(b);
// }

// getDocument();

//////////////////////////////////////////////////delete//////////////////////////////////////////////////////
// var deleteDocument = async (_id) => {
//   // var a = await Playlist.deleteOne({_id});
//   try{
//     // var a = await Playlist.deleteOne({_id});
//     // var a = await Playlist.findByidAndDelete({_id});  // findByidAndDelete   are not working
//   }catch(err){
//     console.log(err)
//   }
// }

// deleteDocument("62b3051681484d1feaf9d288");
