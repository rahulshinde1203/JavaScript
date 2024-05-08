const myObject = {
    js: 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = ['JS', 'rb', 'py']
for (const key in arr) {
    console.log(`${key} shortcut is for ${arr[key]}`);
}


const map = new Map()
map.set('IN','INDIA')
map.set('USA','United State of America')
map.set('Fr','France')

for (const key in map){
    console.log(key);
}
// Map is not itratable thats why we can not use loops thats why output is blank