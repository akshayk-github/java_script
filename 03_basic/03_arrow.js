const user = {
    username: "Akshay",
    price: 8425,

    welcomMsg: function() {
        console.log(`Hello ${this.username}, This is your Welcome Message`);
        console.log(this);
        
    }
}


// user.welcomMsg()
// user.username = "Jenish"
// user.welcomMsg()

// console.log(this);





// function one() {
//     username : "akshay"
//     console.log(this);
//     // console.log(this.username);
// }

// const one = function() {
//     username : "akshay"
//     // console.log(this);
//     console.log(this.username);
// }

// const one = () => {
//     let username = "Akshay"
//     console.log(this);   
// }

const one = () => {
    let username = "Akshay"
    console.log(this);   
}

// one()


// () => {}     // Basic Array Function

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(5,10));

const addTwo = (num1, num2) => ({username: "Akshay"})

console.log(addTwo());
