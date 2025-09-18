// const isUserLoggedIn = true
// const temprature = 40

// if (temprature >= 41) {
//     console.log("yes, temprarure is lesser than 40");
// } else {
//     console.log("No, temprarure is more than 40");
// }

//    <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power is : ${power}`);
// }
// console.log(`User Power is : ${power}`);



// const balance = 100000

// // if (balance <= 100000) console.log("Okay, you have sufficient balance");

// if (balance < 25000) {
//     console.log("Your balance is lesser than 25000");
// } else if (balance < 50000) {
//     console.log("Your balance is lesser than 50000");
// } else if (balance < 75000) {
//     console.log("Your balance is lesser than 75000");
// } else {
//     console.log("Your balance is more than 99999");
// }



const userLoggedIn = true
const addPaymentGetway = true
const loggedInFromGoogle = false
const loggedInFromEmail = false
const loggedInFromNumber = true

if (userLoggedIn && addPaymentGetway) { // All Condition are necessarily tru
    console.log("Allow to Shopping");
}

if (loggedInFromEmail || loggedInFromGoogle || loggedInFromNumber) {    // Any one condition True
    console.log("user logged in");
}