//collection of data or item 
//collect an order form

/*let fruits=["apple", "Banana", "mango","grapes"];
console.log(fruits[3]);

let numbers=[1,2,3,4,5.6,7,89,0,"string", undefined];
console.log(numbers);


let fruits =["apple","Mango","lichi","grapes"];
console.log(fruits);
fruits[1]="banana";
console.log(typeof fruits);
console.log(Array.isArray(fruits));
*/


//Push

let fruits=["apple", "Banana", "grapes"];
let newfruits = fruits.join('_');
console.log(newfruits);
console.log(fruits);
//push
// fruits.push("Mango");
// console.log(fruits.pop());
// fruits.unshift("mango");
let removedFruits=fruits.shift();
console.log(fruits);
console.log("removed fruits is", removedFruits);