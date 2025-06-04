//  Singleton

//  Object.create
//  Object Literals

const mySym = Symbol("key1")

const New_user = {
    name: "Akshay Kumbhani",
    age : 25,
    newSym : [mySym],
    [mySym] : "my New Key 1",
    "Mobile Number" : 54564468,
    location : "Surat",
    email : "akshaykumbhani02@gmail.com",
    isLoggedin : true,
    lastLoginDays : ["Monday", "Tuessday"]
}

// console.log(New_user.email);
// console.log(New_user["email"]);
// console.log(New_user["Mobile Number"]);
// console.log(New_user.newSym);
// console.log(New_user[mySym]);
// console.log(typeof New_user[mySym]);

New_user.email = "akshay@yahoo.com"
console.log(New_user.email);

// Object.freeze(New_user)
New_user.email = "akshay@edge.com"
// console.log(New_user);





New_user.greeting = function() {
    console.log("Jay Swaminarayan");
}

New_user.greetingTwo = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(New_user.greeting());
console.log(New_user.greetingTwo());