// call
// thisArg this obj to be used as thr current object
// A list of arguments to be passed to the method

// const person ={ 
//     name: "Ranjeet"
// };

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person,24));
// console.log(sayHi.bind(person,24));


//find max / min numbers in an array

const numbers =[2,4,7,8,1,3,5,9];
console.log(Math.max.apply(null,numbers));
//for minimum

console.log(Math.min.apply(null,numbers));