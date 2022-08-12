/*let array1 =["item1", "item2"];
 let array2=array1;
 console.log(array1===array2);

let array1=["item1","item2"];
 let array2=["item1", "item2"];
 let array2=array1.slice(0);
 let array2=[].concat(array1);
 array1.push("item3");
 let array2=array1.slice(0).concat(["item3","item4","item5"])
array1.push("item3");
console.log(array1===array2);
console.log(array1,array2 );
 console.log(array2); 
/*

//for loop in array

/*let fruits=["apple", "Banana", "grapes", "mango"];
// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2=[];
for(let i=0; i<=fruits.length-1; i++){
    // console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
    // console.log(fruits[i].toUpperCase())

}
console.log(fruits2);


//use const in an array

// const fruits=["apple","mango"];
// fruits.push("Banana");
// console.log(fruits);

//while loop

const fruits=["apple","mango","greapes"];
const fruits2=[];
let i=0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);


//for of loop

const fruits=["apple", "banana", "grapes", "mango"];
for(let fruit of fruits ){
    console.log(fruit.toUpperCase());
}

*/

const fruits=["apple","banana","mango","grapes"];
const fruits2=[];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

const myArray=["Ranjeet", "Sanjeet","Raju"];
const [myvar1, myvar2, myvar3] =myArray;
// myvar1="value changed";
console.log("value of myvar1 is ", myvar1);
console.log("value of myvar2 is ", myvar2);
console.log("value of myvar3 is ", myvar3);