/* let a =5;
let b= a;
b = b+5;
console.log(a);
console.log(b);

*/

// pass by values is a totaly different to each other

// pass by Reference

const obj1 ={
    user: "ranjeet",
    pass:"password"
}

const obj2= obj1;

obj2.pass ="kuchh nahi";

console.log(obj1);
console.log(obj2);