

// JavaScript is a dynamic language and not static 

// Primitive Data types

// 7 types :-
    // null
    // Number
    // boolean
    // BigInt
    // string
    // Symbol
    // undefined

let temprature = null
// console.log(typeof temprature);


const id = Symbol(123)
const anotherId = Symbol(123)

// console.log(id === anotherId);

const bigNumber = 63516819684359840968541265416583468412n

// console.log(typeof bigNumber);
let convertBigint = BigInt(bigNumber)

// console.log(convertBigint);
// console.log(typeof convertBigint);




// NonPrimitive / Reference type Data types

// 3 type :-
    // Array
    // Object
    // function


// Array
const guru = ["Nil", "Prem", "Dev"]

// Object
const myObj = {
    name: "Akshay",
    age: 25,
}

// console.log(myObj.name, myObj.age);
 
const myFunction = function () {
    console.log("Jay Swaminarayan");
}

console.table([typeof guru, typeof myObj, typeof myFunction])