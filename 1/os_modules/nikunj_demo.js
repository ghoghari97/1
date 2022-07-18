var a = require("os");

var b = a.arch();  // for know which version is supported for our pc
var c = a.freemem();   // we are get free memory in bytes 

console.log(b);
console.log(c);
console.log(`${c/1024/1024/1024}`);  // first 1024 top convert kilobytes then after megabytes and finally we are get gb

var d = a.totalmem();   // we are get total memory in bytes 

console.log(d);
console.log(`${d/1024/1024/1024}`);
console.log(a.hostname());  //  we are get host name means devices name
console.log(a.platform()); // we are get platform means windows 32 or ... etc
console.log(a.tmpdir());  // we are find temp path
console.log(a.type());