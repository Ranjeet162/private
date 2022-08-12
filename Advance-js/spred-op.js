//first method

/* let array1 = [1,2,3,4,5];

let array2 = [6,7,8,9,];
// console.log(array2)

//add array

let array3 = [...array1 ,...array2];
console.log(array3); */

// ..Second method with object

var obj1 = {
  name: "Ranjeet",
  course: "B Tech",
};
var obj2 = {
  age: 22,
};
var obj3 = { ...obj1, obj2 };
console.log(obj3);

//concat 

let array1 =[1,2,3,4,5];
let array2 =[6,7,8,9];
let array3 =[10,11,12,13];

// let array4 = [...array1,...array2,...array3,44,66,77];
let array4 = [...array1,...array2, 44,66,88,...array3];

console.log(array4);
