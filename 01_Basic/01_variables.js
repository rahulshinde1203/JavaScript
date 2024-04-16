const accountId = 144553
let accountEmail="xyz@mail.com"
var accountPass = "12345678"
let accountState;

console.table([accountEmail, accountId, accountPass,accountState])
console.log(accountId);

/*
Prefer not use var keyword
beacuse of issue in block scope and functional scope
use only let and const for declaring variables
*/