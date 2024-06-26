// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting){
    console.log(`Each char is ${greet}`);
}

//Maps --> the map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map()
map.set('IN','INDIA')
map.set('USA','United State of America')
map.set('Fr','France')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }