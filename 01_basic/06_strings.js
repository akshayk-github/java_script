let name = 'Akshay'
let number = 9558481639

console.log(`My name is ${name} and my phone number is ${number}`);

const gameName = new String('Akshay Pravinbhai Kumbhani')

// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(9));
// console.log(gameName.indexOf('a'));

const newGame = gameName.substring(2, 9)
// console.log(newGame);

const sliceGame = gameName.slice(-10, 8) // most usable
// console.log(sliceGame);

const newString = "    Hello     Akshay         "
// console.log(newString);
// console.log(newString.trim());

const url = "https://akshay.com/akshay%20kumbhani"  // usable
console.log(url.replace('%20', '_'));
console.log(url.includes('akshay'));
console.log(url.includes('diku'));

console.log(gameName.split(' '));