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
            firstName: "Some",
            lastName: "Other"
        }
    }
}

// console.log(regularUser.fullName?.userFullName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3);

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

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.freeze(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));







const course = {
    courseName: "JavaScript",
    coursefees: "PriceLess",
    courseInstractor: "Hitesh Choudhary"
}

// console.log(course.courseInstractor);

const {courseInstractor} = course
const {courseInstractor: Instractor} = course

// console.log(courseInstractor);
// console.log(Instractor);
