
//regular function

/* let welcome = function(){
    return "Hello Ranjeet";
}
welcome();

console.log(welcome); */


//Arrow function

/* let welcome =(name, age) =>{
    return `Hello & welcome ${name} your age is ${age}`;
}
console.log(welcome("Ranjeet",22)); */


//other method

let welcome = (name, age) => `welcome ${name} your age is ${age}`;
console.log(welcome("Ranjeet", 15));

//for single input 

let wel= name => `welcome ${name}`;
console.log(wel("Rk"));


/* 
let a=5;
let b=110;
const sum =() => a+b;
console.log(sum()); */

const sum =(a,b) => a+b;
console.log(sum(30,20));

const mult =(a,b=9) =>{
    console.log(`mult value if ${a*b}`);
}
mult(4);