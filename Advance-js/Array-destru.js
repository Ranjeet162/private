//simple method
/* let user =["ranjeet", 22, "siwan"];

let [name,age,city] =user;

console.log(name);
console.log(age);
console.log(city);

*/

//second method

let user = ["ranjeet", 22, "siwan", ["male",25000]];

// let [name, age, city, gender, salary] = user;
let [name, ...agrs] = user;

console.log(name);
console.log(agrs);
