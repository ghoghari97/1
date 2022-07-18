var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Students")
.then( () => { console.log("database connection is avaviable") })
.catch( (err) => { `${err}` });