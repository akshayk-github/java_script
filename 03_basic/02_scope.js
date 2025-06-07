//var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);




function one() {
    const username = "Akshay"

    function two() {
        const surname = "Kumbhani"
        // console.log(username);
    }
    // console.log(surname);
    // two()
}
// one()


if (true) {
    const username = "Akshay"
    // console.log(username);
    
    if (username === "Akshay") {
        const surname = " Kumbhani"
        // console.log(surname);
        
        // console.log(username + surname);
    }
    // console.log(surname);
}
// console.log(username);









// ========================================= interesting =========================================









console.log(addOne(5));

function addOne(num) {
    return num + 1    
}


// console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2    
}

console.log(addTwo(5));
