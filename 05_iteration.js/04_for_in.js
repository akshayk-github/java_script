// for in
// for in on Object

const pandavs = {
    panda_1: "Yudhisthir",
    panda_2: "Bhim",
    panda_3: "Arjun",
    panda_4: "Nakul",
    panda_5: "Sahdev"
}

for (const k in pandavs) {
    // console.log(`${k} is ${pandavs[k]}`);   
}

let myArray = ["Yudhisthir", "Bhim", "Arjun", "Nakul", "Sahdev"]

for (const key in myArray) {
    // console.log(myArray[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UK', "United Kingdom")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
    // console.log(map[key]);
}