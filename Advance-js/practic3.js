// scope

//function scope   var is a function scope

// let and const are the block
// scope only accessible inside the block

/* {
    let  num =24;
    console.log(num);
    // console.log(num);   24 
}
// console.log(num);   num is not defined
// console.log(num); 
*/

//another example for function scope

/* function test() {
  var a = "Hello";
  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}

test(); */
/* 
let a;
let a;   given error not initialization*/
// you can also not given same value to two const

// but you can reassign the same value in var keyword
// var a;
// var a;  this is perfectly work

// let a;
// {
//     let a;   now this is fine 
// }

// var and let can be updated but in const not be updated after declered
// const a=5;
// a=7;


// Hoisting

// console.log(a);
// function abc(){
//     var a=4;
// }

// abc();

// let and const are also hoisted but on;y in temporal dead zone
// var is use to hoisting js code


// Map, filter, reduce

// this all are array method to using itrate array

//map
// is used to creating new array for existing one and return a new array

/* let number=[1,2,3,4,5];

let Allno = number.map((num)=>{
    return num+5;
});
console.log(Allno); */

// filter Array
/* filter is apply for conditional Array and 
its return new array only which one is fullfilled the condition 
*/

/* const nums = [1,2,3,4,6,7,8];

const moreThanTwo = nums.filter((moreTwo) =>{
    return moreTwo>2;
});
console.log(moreThanTwo); */

//Reduce method
// reduces the array of the value  down to one value

/* const nums =[1,2,3,4,5,6,7,8,9];
const sum = nums.reduce((acc, current) =>{
    return acc+current;

});
console.log(sum); */

// pollyfill for Map
// pollyfill is a pice of code to used provides modern functionality on order browser
/* Array.prototype.myNap = function(cb){
 let twmp =[];
 for(let i=0; i<this.length; i++){
    twmp.push(cb(this[i],i,this));
 }
 return twmp;
};
const nums=[1,2,3,4,5];
const multi = nums.myNap((nums,i,arr) =>{
    return nums *3;
})
console.log(multi); */

// map vs forEach

/* const arr = [2,3,4,5,6,7];
const mapResult = arr.map((sum) =>{
    return sum+3;
});
console.log(mapResult);

const forEachREsult =arr.forEach((sum,i) =>{
    sum[i] = sum+2;
});

console.log(forEachREsult, arr); */

// Qun1 More than 60 marks and roll no greater than 15

let students =[
    {name:'raj', rollnumber:22, marks:30},
    {name:'nikhil', rollnumber:12, marks:40},
    {name:'sanjeet', rollnumber:25, marks:20},
    {name:'rajkumar', rollnumber:20, marks:50}
];

/* const detalis =students.filter((NewData) =>
    NewData.marks>50 && NewData.rollnumber>15);
console.log(detalis); */

//calkulate marks of all student
/* const sum=students.reduce((acc,current) => acc+ current.marks);
console.log(sum); */

//more marks 60
/* const mark = students.filter((NewData) => NewData.marks>50);
console.log(mark); */

//if total marks is <50 get +20 marks and sum total marks
const totalMarks  = students.map((stu)=>{
    if(stu.marks<50){
        stu.marks +=20;
    }
    return stu;
});
console.log(totalMarks);