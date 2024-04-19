//Stack Memory use in Primitive Data Types
//Heap Memory Use in Non Primitive

let myVariable = xyz

let anotherVariable = myVariable

anotherVariable = xyz
//value change in only anotherVariable

let userOne ={
    email : "xyz@email.com",
    upiId : "user@ybl"

}

let userTwo =userOne

userTwo.email = "abc@email.com"
//value change in both users (userOne & userTwo)