//string is a group of alphanumeric, aplhabhetic , Numric value and it denoted between '  ' (single qoutes) and "  "(double qoutes)

const name = 'Rahul'
const repoCount = 50

console.log (name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameNew = new String ("rahuuuul")
console.log(gameNew);

console.log(gameNew.__proto__)
console.log(gameNew.toUpperCase());
console.log(gameNew.charAt(2))
console.log(gameNew.indexOf('r'));


const newString = gameNew.substring(0,4)
console.log(newString);

const anotherString = gameNew.slice(-10, 3)
console.log(anotherString);

let newStringOne = "       idefjijasdi        "
console.log(newStringOne)
console.log(newStringOne.trim(" "));