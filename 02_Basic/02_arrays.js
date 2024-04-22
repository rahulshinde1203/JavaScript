const marvel_heros = ["Ironman", "Thor", "Captain america"]
const dc_heros = ["Superman", "Flash", "Batman"]

console.log(marvel_heros);
console.log(dc_heros);
console.log(marvel_heros.push(dc_heros));
console.log(marvel_heros);
console.log(dc_heros);

console.log(marvel_heros.concat(dc_heros));

const all_heros =[...marvel_heros,...dc_heros]
console.log(all_heros);

const complex_arr = [1 ,2 ,3, [6, 8, 10], 7, [20, 21, 22, [11, 12, 13]]]

const real_complex_arr = complex_arr.flat(Infinity)
console.log(real_complex_arr)



console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));
console.log(Array.from({name: 'rahul'}));


let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1, score2, score3));