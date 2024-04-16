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

//**************** Operations*******************
 let value = 3
 let negvalue = -value
 console.table([value,negvalue,])

 // operation 
 //Addtion (a+b)
 //Substraction (a-b)
 //Multiplication (a*b)
 //Power (a**b)
 //Division (a/b)
 //remender (a%b)


 let str1= "hello"
 let str2 = "Rahul"

 let str3 = str1+str2 // concatation
console.log(str3);

console.log("1"+2); // output 12

console.log(1+"2"); // output 12
console.log("1"+2+2); // output 122
console.log(1+2+"2"); // output 32