//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2000, 2, 7)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday:"long",
})

