const marvel_heros = ["Thor", "Ironman", "Hulk", "Loki"]
const DC_heros = ["Wonder Women", "Superman", "Batman", "Flash"]

// marvel_heros.push(DC_heros)
// marvel_heros.concat(DC_heros)

// console.log(marvel_heros);
// console.log(marvel_heros + DC_heros);

// const allHeros = marvel_heros.concat(DC_heros)
// console.log(allHeros);

const allSpreadHeros = [...marvel_heros, ...DC_heros]       // Spread All Array
// console.log(allSpreadHeros);

const nested_array = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11], 12]]
// console.log(nested_array);

const simple_nested_array = nested_array.flat(Infinity)
// console.log(simple_nested_array);







console.log(Array.isArray("Akshay"));               // check is this Array
console.log(Array.from("Akshay"));                  // convert in Array
console.log(Array.from({Name : "Akshay"}));         // Interesting


let score_1 = 100
let score_2 = 200
let score_3 = 300
let score_4 = 400

// console.log(Array.from(score_1, score_2, score_3, score_4));
console.log(Array.of(score_1, score_2, score_3, score_4));
