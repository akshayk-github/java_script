// const userEmail = "akshaykumbhani@gmail.com"
// const userEmail = ""
// const userEmail = "0"
const userEmail = []

if (userEmail) {
//     console.log("Got user Email");
} else {
//     console.log("Don't have user Email");
}

// =========================== NOTES ===========================

//  Falsy Value
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}  // Empty array, object, function


if (userEmail.length === 0) {
//     console.log("Array is Empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is Empty");
}

if (false == 0 && false == "" && 0 == '') {
    // console.log("True");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = undefined ?? 5 ?? 10 
val1 = "" ?? 10 
// val1 = undefined ?? null

// console.log(val1);



// Terniary Operator

// condition ? true : false

const teaPrice = 100
teaPrice >= 80 ? console.log("Price is more than 80") : console.log("Price is under 80");
console.log(
    teaPrice >= 80 ? "Price is more than 80" : "Price is under 80"
);

