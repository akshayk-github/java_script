let myArray = ["Yudhisthir", "Bhim", "Arjun", "Nakul", "Sahdev"]

myArray.forEach(function (val) {
    // console.log(val);
})

myArray.forEach((item) => {
    // console.log(item);
})

function print(item) {
    console.log(item);
}

// myArray.forEach(print)

myArray.forEach((item, index, arr) => {
    // console.log(index, item, arr);
})





const pandavs = [
    {
        pandav: "Yudhisthir",
        pandavMaa: "Kunti"
    },
    {
        pandav: "Bhim",
        pandavMaa: "Kunti"
    },
    {
        pandav: "Arjun",
        pandavMaa: "Kunti"
    },
    {
        pandav: "Nakul",
        pandavMaa: "Madri"
    },
    {
        pandav: "Sahdev",
        pandavMaa: "Madri"
    },
]

pandavs.forEach((item, index) => {
    console.log(`Pandav no.${index + 1} is ${item.pandav} and his Mother is ${item.pandavMaa}`);
})