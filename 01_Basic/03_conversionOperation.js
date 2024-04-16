let score = "33"

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

//"33" => 33 easily convert
//"33abc" => NaN (not a number) number with alphabets not convertable into number datatype its type show "NaN"
// true => 1
// false => 0

let isLoggedIn = 1
let BooleanIsLogIn = Boolean(isLoggedIn)
console.table([isLoggedIn, BooleanIsLogIn])

let someNumber = 33
let stringnumber = String(someNumber)
console.table([someNumber,stringnumber, typeof(stringnumber)])
