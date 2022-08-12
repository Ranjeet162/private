let myVar;
myVar = 34;
console.log(myVar,(typeof myVar));

//convert boolean to String
let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

//to find current date and time 2 
let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,3,4,5,6,7,8]);
// console.log(arr.length, (typeof arr));

let i=8;
// console.log(i.toString());

//number function
let str1 = Number("3456");
str1 = Number(false);
str1 = Number([2,3,6,8,98,4,6,0]);
// console.log(str1,(typeof str1));

let number =parseInt("3,6,7,3,5");
console.log(number,(typeof number));


//to find fixed value 

let number1= parseFloat('34.098');
console.log(number1.toFixed(2), (typeof number1));




//type coercion
let mystr=Number("765");
let mynum = 34;
console.log(mystr+mynum);



