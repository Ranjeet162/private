//MAP function

/* const myArr= [3,4,5,7,9,6];

function tripale(x){
    return x*3;
}
let NewArr = myArr.map(tripale);
console.log(NewArr); */

//convert Binary

/* const myArr= [3,4,5,7,9,6];
function Binary(b){
    return b.toString(2);
}
let NewArr= myArr.map(Binary);
console.log(NewArr); */

//Another way to write the code

/* const myArr= [3,4,5,7,9,6];

const Binary = myArr.map(function Binary(b){
    return b.toString(4);
});
console.log(Binary); */


//With the arrow function use
/* const myArr= [3,4,5,7,9,6];
let Binary = myArr.map((b) =>b.toString(3));
console.log(Binary); */

//Filter

// filetr the value inside the Array
/* const myArr2= [3,4,5,7,9,6];

function isOdd(x){
    // return x%2;
    return x>5;
}
let output = myArr2.filter(isOdd);
console.log(output) */

//filter value with arrow function
//filter the value which is greater the 3

/* const myArr= [3,4,5,7,9,6];
const output = myArr.filter((f)=>f>3);
console.log(output); */


//Reduse function
// it give only one output 
//its take 2 parameters in the function 
const myArr= [3,4,5,7,9,6];
//find max and sum


