const name = "devaki";
const repoCount = 50;
// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Devaa...')

console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = "  DEVA  ";
console.log(newStringOne);
console.log(newStringOne.trim());
