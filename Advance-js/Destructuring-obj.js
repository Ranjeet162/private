// old method

/* let user ={
    name:"ranjeet",
    age:25
};
console.log(user); 

*/

// Array Destructuring

let user ={
    name: "ranjeet",
    age:22,
    city:"siwan"
};
let {name :n,age:a, city:c} = user;
// console.log(name);
console.log(n);
// console.log(age);
console.log(a);
// console.log(city);
console.log(c);