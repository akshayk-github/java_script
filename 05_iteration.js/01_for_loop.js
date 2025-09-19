// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);

    if (element == 5) {
        // console.log("5 Number is Here");
    }
}



for (let i = 1; i <= 10; i++) {
    // console.log("Multiplication Tables of " + i);

    for (let m = 1; m <= 10; m++) {
        // console.log(`${i} * ${m} = ${i*m}`);
    }
}



let myArray = ["Yudhisthir", "Bhim", "Arjun", "Nakul", "Sahdev"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}



for (let i = 1; i < 20; i++) {
    if (i == 5) {
        // console.log("5 Detected");
        break
    }
    // console.log(`Value of "i" is ${i}`);
}



for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log("5 Detected");
        continue
    }
    console.log(`Value of "i" is ${i}`);
}