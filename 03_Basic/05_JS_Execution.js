// JavaScript is single treaded lang

// JavaScript Execution Context

// {}--> Global Execution Context

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// JavaScript Execution is executed in two phase
// 1. Memory Creation Phase
// 2. Execution Phase

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// 1. Global Execution --> this

/*
   2. Memory phase --> val1--> undefined
                   --> val2--> undefined
                   --> addnum--> defined
                   --> result1--> undefined
                   --> result2--> undefined

*/

/*
   3. Execution Phase --> val1-->10
                      --> val2-->5
                      --> addnum--> new variable environment + Execuation thread -->(it delete when its work is complete)
                                                                                 --> Memory Phase -->
                                                                                                  -->val1 --> undefined
                                                                                                  -->val2 --> undefined
                                                                                                  -->total --> undefined
                                                                                 -->Execution Context -->
                                                                                                      -->num1 --> 10
                                                                                                      -->num2 --> 5
                                                                                                      -->total --> 15(total return in Global Execution Phase)

*/                                                                                                    
                         


//Call Stack(LIFO (Last In First Out))

/*
 
                       one()
                       two()
                       Three()

    Global
*/

function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}

one()
two()
three()


