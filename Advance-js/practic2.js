/* for(var i=0; i<10; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
} */
//output print 10 ten times because var is a global scope so the final value printed 10 time


//let case
/* 
for(let i=0; i<10; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
} */

//output print 1 to 9 values after 1 sec  because let is a block scope variable

//let see for const

/* for(const i=0; i<10; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
} */

//geting typererror because Assignment to constant varibale i++ it's not possible in const


//default parameter

// when not passing any value to function

/* function add(a,b=10){
    return a+b;
}
console.log(add(12)); */

//in function

/* function main(a, b= main()){
    return a+b;
}
main(); */
//give output is RangeError : maximum call stack size exceeded


//template literals `` 
/*   let fname ="ranjeet"
  let lname ="yadav";
  x =10;
  y=9;
function fullname(){
    
     fullname = fname+lname;
     console.log(`my  full name is ${fname} ${lname} and multi
     ${x*y}`)
}

fullname(); */

//find and findIndex
/* 
let arr =[1,2,30,40,5,6];
let result = arr.findIndex(function(item){
    return item<=10;
});
console.log(result); */

//Arrow function

/* let data =[10,20,30,40,50];
let newdata = data.map(function(test){
    return test *3;
})
console.log(newdata); */

//second methods 
/* let data =[10,20,30,40,50];
let newdata =data.map((item) =>item*2);
console.log(newdata); */


/* let item ={
    name:"ranjeet",
    getName:function(){
        console.log(this);
    }
    
}
item.getName(); */

//rest operator

//baki bachi hui chijhe

/* function fruit(a,...z){
    console.log('fruit',z);
        
    }
fruit('Apple', 'banana','mango', 'lichi','grapes'); */

//Promise

/* let prom =new Promise((resolved, reject) =>{

    setTimeout(() => {
        a="Hello from promise";
        resolved(a);
        reject('data not found');
    }, 2000);
});

prom.then((a) =>{
    console.log(a);
}).catch((error) =>{
    console.log(error);
});
 */

//global function

// console.log(isFinite(10/0));
// console.log(isNaN(6));
// console.log(isNaN('ranjeet'));

//Destructring
// to unpack the Array in side the variable
/*  let fruits= ['Apple', 'mango', 'lichi','orange', 'Banana'];
//  let [fruit1,,,fruit3] =fruits;
 let [...fruitx] =fruits;
 console.log(fruitx) */

 //Destructuring Object

 //don.t skip the value
 //Asign one object to different part 
 // destruct through key

 /* let user ={ name:'ranjeet', mobile:23456, age:22, gmail:'rk@gmail.com'}
 let {name,gmail} =user;
 console.log(user.gmail);
 console.log(user.mobile); */

 //spred operator 
 //use to pass the parameter and rest operator use to get parameter
//  use to coppy Array and add Array
/* let fruits =['Apple', 'mango', "lichi",'banana'];
function printAll(a,b,c){
    console.log(a,b,c);
}
printAll(...fruits); */

/* let arr1 =[1,23,4,6,8];
// let arr2 =[9,0,10,11,20];
arr2 =[...arr1];
console.log(arr2); */

/* let arr1 =[1,23,4,6,8];
let arr2 =[9,0,10,...arr1,11,20];

console.log(arr2); */

//Exponentiation Operator
//to use for give or find the power of two no

/* console.log(3**2);  //9
console.log(3*2);  //6
console.log(2*-3);  //-6
console.log(5*5);  //25
console.log(2**3*2);   //16
console.log(2**3**2);   //512 bcz  its power of two time */

//Module

// to use import and export
//to allow one file some code to import and export another file



//Generator funcation

// use to pose and resume the runing the code
// ..use the yield to stop and resume the function 

function* steps(){
    let a =10;
    let b=20;
    console.log(10+20);
    yield `step 1 is completed`
    console.log(10-20);
    yield `step2 is completed`
     return `All steps done`
        
    
}
let stp = steps();
function getSteps(){
    console.log(stp.next());
}

