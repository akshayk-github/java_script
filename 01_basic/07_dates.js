let myDate = new Date()

// console.log(myDate.toDateString());                 // Tue May 27 2025
// console.log(myDate.toISOString());                  // 2025-05-27T16:35:55.728Z
// console.log(myDate.toJSON());                       // 2025-05-27T16:35:55.728Z
// console.log(myDate.toLocaleDateString());           // 5/27/2025
// console.log(myDate.toLocaleString());               // 5/27/2025, 4:37:01 PM
// console.log(myDate.toLocaleTimeString());           // 4:37:01 PM
// console.log(myDate.toString());                     // Tue May 27 2025 16:37:01 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString());                 // 16:37:01 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());                  // Tue, 27 May 2025 16:37:01 GMT

// console.log(typeof myDate);                         // object

// let newDate = new Date(2025, 2, 26, 8, 26, 2)
let newDate = new Date("10-21-2025")
// console.log(newDate.toLocaleString());





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Time ++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myTime = Date.now()
// console.log(myTime);
// console.log(Date.now());
// console.log(newDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let customDate = new Date()
console.log(customDate);
console.log(customDate.getMonth() + 1);
console.log(customDate.getDay().toString());
console.log(typeof(customDate.getDay().toString()));
console.log(customDate.getDate());
console.log(customDate.getYear());



console.log(`Hello, Today's date is ${customDate.getDate()}, Month is ${customDate.getMonth() + 1} and current year is ${customDate.getYear() + 1900}`);

console.log(customDate.toLocaleString('default', {
    weekday: "long"
}));

let myNewDate = customDate.toLocaleString('default', {
    weekday: "long"
})


console.log(myNewDate);
