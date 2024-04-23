const userEmail = "rahul@mail.com"

if (userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


/* Falsy Value -->False, 0, BigInt, "", null, undefined, NaN

   trithy Valuse --> other than falsy value, "0", " ", [], {}, function(){}

*/

if (userEmail.length==0){
    console.log("Array is Empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length==0) {
    console.log("Object is Empty");
}

// false == 0 --> true
// false == "" --> true
//0 == "" --> true 

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
//output --> 5

let val2
val2 = null ?? 10
console.log(val2);
//output --> 10

let val3
val3 = undefined ?? 35
console.log(val3);
//output --> 35


val4 = null ?? 10 ?? 20
console.log(val4);
//output --> 10


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");;