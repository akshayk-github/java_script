let score = "32";
score = null
score = undefined
score = false

// console.log(score);
// console.log(typeof score);

let convertNumber = Number(score)
// console.log(typeof convertNumber);
// console.log(convertNumber);


/* Notes */
// "32" => 32
// "32abc" => NaN => type - number
// true => 1; false => 0
// null => 0
// undefined => NaN


let isloggedIn = "akshay"

// console.log(isloggedIn);
// let convertBoolean = Boolean(isloggedIn)

// console.log(typeof convertBoolean);
// console.log(convertBoolean);


// Notes
// 1 => true; 0 => false
// "" => false
// "akshay" => true
// null => false
// undefined => false



let someNumber = 32

// let convertString = String(someNumber)
// console.log(typeof convertString);
// console.log(convertString);


// ******************************* oprations *******************************


let value = -2
let negvalue = +value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**4);
// console.log(2%8);

let str1 = "Jay "
let str2 = "Swaminarayan"

console.log(str1 + str2);


// console.log(1+2+"3");
// console.log(1+2+"3"+33);

console.log(+true);
console.log(+"");


// gamecounter = 100
// gamecounter++
// // ++gamecounter
// console.log(gamecounter);



// let score1 = 100;
// let score2 = ++score1;

let score1 = 100;
let score2 = score1++;

console.log(score1);
console.log(score2);