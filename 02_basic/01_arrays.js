let myArray = [1, 2, 3, 4, 5, 6]
// console.log(myArray[5]);

let myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

myArray2.push(11, 12, 13, 14, 15)   // ADD VALUE IN ARRAY
myArray2.pop()                      // REMOVE LAST VALUE
myArray2.unshift(-3, -2, -1, 0)     // INSERT VALUE IN ARRAY'S START
myArray2.shift()                    // REMOVE FIRST VALUE
// console.log(myArray2);

// console.log(myArray2.includes(8));
// console.log(myArray2.indexOf(8));

const newArray = myArray2.join()
// console.log(newArray);
// console.log(typeof newArray);









console.log("A : ", myArray);

const newary1 = myArray.slice(1,4)

console.log(newary1);
console.log("b : ", myArray);

const newary2 = myArray.splice(1, 4)
console.log(newary2);
console.log("C : ", myArray);
