
//////////////////////////////////////// convert object data into json //////////////////////////////////////

// var a = {
//     name : "nik",
//     surname : "Ghoghari", 
//     age : 22,
//     gender : "male",
// }

// // console.log(a);
// console.log(a.age);

// var b = JSON.stringify(a);
// console.log(b);
// console.log(b.age);  // we can't access json data this way

// var c = JSON.parse(b);
// console.log(c);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var p = require("fs");

var n = {
    name : "hemaxi",
    surname : "patel", 
    age : 21,
    gender : "female",
}

var m = JSON.stringify(n);

p.writeFileSync("read.json", m , () => {
    console.log("okay");
});

var o = p.readFile("read.json","utf-8", (err,data) => {
    console.log(data);
    var r = JSON.parse(data);
    console.log(r);
}) ;
// console.log(o);

// var q= o.toString();
// console.log(q);

// var r = JSON.parse(data);
// console.log(r);                                                                                                                                             


// p.writeFileSync("output.txt",r);

////////////node js data is private data niote down this thing once again/////////////////////////////////////