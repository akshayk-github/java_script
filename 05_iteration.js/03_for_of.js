// for of
// for of on Array

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
}


// Map


const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UK', "United Kingdom")
map.set('IN', "India")

// console.log(map);

for (const [k, v] of map) {
    // console.log(`${k} :- ${v}`);
}


const games = {
    game1: "Vice City",
    game2: "Spiderman"
}

for (const [k, v] of games) {
    // console.log(`${k} :- ${v}`);
}