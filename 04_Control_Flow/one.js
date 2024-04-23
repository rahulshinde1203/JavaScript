// if Statement

if (true) {
    
}// code will executed

if (false) {
    
}// code will not executed

const isUserLoggedIn = true

if (isUserLoggedIn){

}// code will executed

if (2=="2"){
    console.log("Executed");
}

if (2==="2"){
    console.log("not Executed");
}//code will not executed

const temperature = 41

if (temperature === 40){
    console.log("Yes");
}
else{
    console.log("No");
}

const score = 200 
if (score >100){
    const power = "fly"
    console.log(`User Power : ${power}`);
}

//Shorthand Notation 

const balance = 1000

if(balance > 500) console.log("yes");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy product");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow");
}

