// var a = require("chalk");
var b = require("validator");

// console.log(chalk.blue("Hi"));
// console.log(chalk.italic("Hi"));
// console.log(chalk.inverse("Hi"));
// same to same underline , 

var c = b.isEmail('nikunjghoghari456@gmail.com');
var d = b.isEmail('nikunjghoghari456gmail.com');

 // same to same ismobile isurl possible

console.log(c);
console.log(d);