// reduce

const myNums = [1, 2, 3, 4,] 
const myTotal = myNums.reduce((acc, currVal)=>{
    console.log(`acc: ${acc} and currVal ${currVal}`);
    return acc + currVal
}, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JavaScript",
        price : 999
    },
    {
        itemName : "Python",
        price : 1999
    },
    {
        itemName : "DSA",
        price : 3999
    },
    {
        itemName : "Mern Stack",
        price : 9999
    },
    {
        itemName : "nextJS",
        price : 2999
    },
    {
        itemName : "Data Science",
        price : 11999
    }
]

const PriceToPay = shoppingCart.reduce((acc, item)=>(acc + item.price),0)
console.log(PriceToPay);