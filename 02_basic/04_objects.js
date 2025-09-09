// const tinderUser = new Object()      // Singleton Object
const tinderUser = {}                   // Non-Singleton Object

tinderUser.id = 124
tinderUser.name = "Akash"
tinderUser.age = 24
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Akshay",
            lastName: "Kumbhani"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj3 = {5: "E", 6: "F"}

// const obj3 = obj1+obj2   // its not work

// const obj4 = Object.assign(obj1, obj2, obj3)    //all object value store in first object
// const obj4 = Object.assign({}, obj1, obj2, obj3)    //obj1 values as it is, so store in new {}

const obj4 = {...obj1, ...obj2, ...obj3}    //most uses spread oprators

// console.log(obj4);
// console.log(obj1);

const user = [
    {
        id: 124,
        email: "ak@gmail.com"
    },
    {
        id: 124,
        email: "ak@gmail.com"
    },
    {
        id: 124,
        email: "ak@gmail.com"
    },
    {
        id: 124,
        email: "ak@gmail.com"
    },
    {
        id: 124,
        email: "ak@gmail.com"
    },
    {
        id: 124,
        email: "ak@gmail.com"
    }
]

// console.log(user[2].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Object.freeze(tinderUser);
tinderUser.name = "Akshay Kumbhani"

// console.log(tinderUser);

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));







const course = {
    courseName: "JavaScript",
    coursefees: "PriceLess",
    courseInstractor: "Hitesh Choudhary"
}

// console.log(course.courseInstractor);

const {courseInstractor: Instractor} = course

// console.log(courseInstractor);
console.log(Instractor);




// JSON

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]