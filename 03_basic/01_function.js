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









function calculateCartPrice(val1, val2, ...prc1) {
    console.log(val1);
    console.log(val2);

    return prc1
}

// console.log(calculateCartPrice(500, 260, 400, 1050, 720));









const user = {
    username: "Akshay",
    price: 1999
}

function handleObject(user) {
    // console.log(`Username is ${user.username} and Price is ${user.price}`);   
}

// handleObject(user)
handleObject({
    username: "Diku",
    price: 545
})









const newArry = [200, 5400, 725, 517]

function returnSecondValue(getNewArray) {
    return getNewArray[1]
}

// console.log(returnSecondValue(newArry));
console.log(returnSecondValue([503, 354, 5674, 5645]));
