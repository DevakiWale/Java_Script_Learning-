let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);



// let myCreatedDate = new Date(2025 , 0 , 25);
// let myCreatedDate = new Date(2025, 0, 25, 5, 3);
let myCreatedDate = new Date("2025-01-25");
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());