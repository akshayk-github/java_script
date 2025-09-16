const user = {
    username: "Akshay",
    role: "Entrepreneur",

    welcomeMsg: function() {
        console.log(`Hey, ${this.username} you're ${this.role}`);
        console.log(this);
    }
}

// console.log(user.welcomeMsg);
// user.welcomeMsg()
// user.username = "Mayur"
// user.welcomeMsg()

// console.log(this);  // current context is Empty (Because thus is node Environment)      -/-     in browser global object is Window




// function Ak() {
//     let username = "Akshay"
//     // console.log(this.username);  //output: Undefined     // this context work only object
//     console.log(this);
// }

// const Ak = function() {
//     let username = "Akshay"
//     console.log(this.username);
// }

const Ak = () => {      // Arraw Function
    let username = "Akshay"
    console.log(this.username);
}

// Ak()



//    basic arraw function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//    Implicit arraw function
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "aAkshay"})

console.log(addTwo(5,5));
