function sayMyName() {
    console.log("A");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("y");
}

// sayMyName()

// function addTwoNumber(num1, num2) {
//     console.log(num1+num2);
// }

// addTwoNumber(3, "7")
// const myResult = addTwoNumber(3, 7)
// console.log("result : ", myResult);




function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // return result
    // console.log("Akshay");      // can't print after return
    return num1 + num2

}

let result = addTwoNumber(3, 7)
// console.log("Result : ", result);




// function loginUserMsg(username) {
function loginUserMsg(username = "Admin") {
    // if (username === undefined) {
    if (!username) {
        console.log("Please, Enter a Username");
        return
    } else {
        return `${username}, Just Logged In `
    }
}

// console.log(loginUserMsg("Akshay"));
// console.log(loginUserMsg());









function calculateCartPrice(val1, val2, ...num1) {     // in this case ... is *rest*
    return num1;
}

// console.log(calculateCartPrice(500, 600, 700, 800, 900));

const user = {
    username: "Akshay",
    role: "Entrepreneur, Philanthropist"
}

function handleObject(anyobject) {
    // console.log(`Hello, my name is ${anyobject.username} and i'm a ${anyobject.role}.`);
}

// handleObject(user);
handleObject({
    username: "Akshay",
    role: "Enterprenuer and Philanthropist"
})

const myArray = [200, 100, 500, 400]

function returnSecondValue(anyArray) {
    return anyArray[2]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 100, 500, 400]));
