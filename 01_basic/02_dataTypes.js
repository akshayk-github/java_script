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

console.log(typeof "Akshay"); // type = object

console.table([typeof undefined, typeof null, typeof String, typeof Number, typeof Boolean, typeof BigInt, typeof Symbol]);