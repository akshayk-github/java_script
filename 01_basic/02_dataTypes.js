"use strict"; // treat all JS code as newer version

// alert (3+3) // we are using nodejs, not Browser

// number => 1234
// null => standalone value
// boolean => true/false
// bigint => 
// String => ""
// symbol => unique
// undefined => 

let name = "Akshay"

console.log(typeof undefined); // type = undefined
console.log(typeof null); // type = object

console.log(typeof "Akshay"); // type = string

console.table([typeof undefined, typeof null, typeof String, typeof Number, typeof Boolean, typeof BigInt, typeof Symbol]);