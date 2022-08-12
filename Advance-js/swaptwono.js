/* //old method
let a = 10;
let b = 9;
let temp =a;

a=b;
b=temp;


console.log(`the value of  a is ${a} and the value of b is ${b}`);


*/

//without 3rd variable

let a =101;

let b=900;
[a,b] = [b,a];
console.log(`the value of a is ${a} and the new value of b is ${b}`);