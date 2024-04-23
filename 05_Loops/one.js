// for loops

for (let index = 0; index <= 10; index++) {
    //console.log(index);
    
}

for (let index = 0; index <= 10; index++) {
    //console.log(`Outer loop value : ${index}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value : ${j} and inner loop ${index}`);
        
    }
    
}

let myArray = ['flash', 'batman', 'superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

//break and Continue

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of index is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
    
}
