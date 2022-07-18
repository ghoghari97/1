var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myapp').
then( () => console.log("connection sucessfully"))
.catch( (err) => console.log(err));