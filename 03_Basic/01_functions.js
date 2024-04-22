function sayMyName (){

}
sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers(3,4)

function addTwoNumbers(num1, num2){
    let result =(num1 + num2);
    return result
}

const result = addTwoNumbers(3,4)
console.log(result)

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahul"));

function loginUserMsg(username){
    if (!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Rahul"));


function calculateCardPrice (...num1){
    return num1
}
console.log(calculateCardPrice(200, 333, 444))

const user = {
    userName : "Rahul",
    price : 199
}

function handleObj(anyObj){
    console.log(`UserName is ${anyObj.userName} and price is ${anyObj.price}`);
}

handleObj(user)

const myNewArr = [200,300,400,500]

function returnSecondValue (getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr));