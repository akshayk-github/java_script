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




function one(){
    const name = "Akshay"

    function two(){
        const surname = " Kumbhani"
        console.log(name + surname);
    }
    // console.log(surname);   // This is not in a Scope
    two()
}

// one()


if (true) {
    const username = "Akshay"

    if (username === "Akshay") {
        const surname = "Kumbhani"
        // console.log(username);
    }
    else {
        console.log(`username is not matched`);
    }
    // console.log(surname);
}
// console.log(username);










// ========================================= interesting =========================================











console.log(addOne(5));   // access before create function

function addOne(num) {
    return num + 1
}


console.log(addTwo(5));   // in this scenario can't access before create function
// Expression
const addTwo = function (num) {
    return num + 2
}
