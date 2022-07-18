var a = require("path");

var b = a.dirname("C:/node nikunj/path modules/index.js"); // we are get path of working dir

console.log(b);

var c = a.extname("C:/node nikunj/path modules/index.js");  // we are get extension of files

console.log(c);

var d = a.basename("C:/node nikunj/path modules/index.js");  // we are get files name

console.log(d);  

var e = a.parse("C:/node nikunj/path modules/index.js");  // we are get one array & inn array we are get all parameter
                                                          // dir name , basename , extname , name & root
console.log(e);

console.log(e.name); // we are call name propertys