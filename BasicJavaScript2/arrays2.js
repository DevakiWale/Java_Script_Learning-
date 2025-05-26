const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// console.log (marvel_heros.push(dc_heros));//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(dc_heros);

// const allHeros = marvel_heros.concat(dc_heros)  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(allHeros);
// console.log(marvel_heros);


// const all_new_heros = [...marvel_heros, ...dc_heros];//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] another method concat arrays.
// console.log(all_new_heros);




const another_array = [1, 2, 3, [4, 5, 6], 7, [6 ,7, [4, 5]]];
console.log(another_array);
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Devaki"));
console.log(Array.from("Devaki"));
console.log(Array.from({name:"Devaki"}));//interesting display [];

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]