// array
/* JavaScript arrays aren't primitive but are instead Array objects with the following core characteristics 
 JavaScript arrays are resizable and can contain a mic of different datatypes 
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitary string as indexes, but must be accessed using nonnegative integers as indexes
JavaScript array create shallow copies */
const myArr = [0,1,2,3,4,5,6,7]
const myHeroes = ["Shaktiman", "JuniorG"]

const myArr2 = new Array(1,2,3,4,5,6)
console.log(myArr2);

//Array methods
//Push- add element in array at last index and change original array

myArr.push(8)
console.log(myArr);

//Pop - remove last element and change original array
myArr.pop()
console.log(myArr);

//Unshift - add element 0th index in array and chage original array
 myArr.unshift(9)
 console.log(myArr);

//shift - remove first element from array and change original array
myArr.shift()
console.log(myArr);

//includes - find specific value from array and give ans in True and False
console.log(myArr.includes(9))

//indexof - find the index of specific value if value does not exist it return -1
console.log(myArr.indexOf(5))

//Join - return the value in string format (change the datatype object from string)
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

//slice - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array and does not change original array

console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);

//splice-Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. doesn't change original array
console.log("A", myArr)
const myn2 = myArr.splice(1,3)
console.log(myn1);

