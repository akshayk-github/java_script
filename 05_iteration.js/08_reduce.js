const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myTotal = myNums.reduce((acc, curVal) => {
//     console.log(`acc : ${acc} | curVal : ${curVal}`);
//     return acc * curVal
// }, 1)

const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        CarName: "Range Rover Autobiography",
        Price: 3.64
    },
    {
        CarName: "Mercedes Maybach GLS 600",
        Price: 3.71
    },
    {
        CarName: "Range Rover Autobiography",
        Price: 4.00
    }
]

const priceToPay = shoppingCart.reduce((a, i) => a + i.Price, 0)
console.log(`${priceToPay} cr.`);
