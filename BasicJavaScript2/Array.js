const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2);
console.log(myArr[5]);

myArr.push(23);
console.log(myArr);

// myArr.pop();

// myArr.unshift(9);//adding element in 0th index.

// myArr.shift();//Remove 0th index element.
console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(newArr);


//Slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3);//Remove the element in this range (1,2,3) in main array it change it .
console.log("c ",myArr);Display[0,4,5,23]
console.log(myn2);//Display [1,2,3]