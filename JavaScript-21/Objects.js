"use strict"
//how to create objects

/*const person ={name:"Ranjeet ", age:22};
console.log(person);
//how to access data from objects

console.log(person.name);
console.log(person.age);

const person={
    name:"Ranjeet ",
    age:22,
    hobbies:["playing", "sleeping","writing","listening music"]
}
console.log(person);
console.log(person.hobbies);
console.log(person.age);
person.gender="male";
// console.log(person);
console.log(person["age"])
console.log(person["name"]);
*/
const key="email";
const person={
    name: "ranjeet",
    age:22,
    "person hobbies":["giitar", "sleep", "listening"]
}
console.log(person["person hobbies"]);
person[key]="ranjitkumaryadav@gmail.com";
// console.log(person);
// delete person.age;
for(let key in person){
    console.log(`${key}:${person[key]}`);
}