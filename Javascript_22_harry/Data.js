//Primitive Data types
//String
var name='Ranjeet';
console.log('my string is '+ name);
console.log("Data type is "+ (typeof name));

//Numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

//boolean
let isDriver = true;
console.log("Data type is " +(typeof isDriver));

//null
let nullVar=null;
console.log("Data type is "+(typeof nullVar));

//undefiend

let undef = undefined;
console.log("Data type is " +(typeof undef));


//Referecnse Data type

//Array
myarr = [1,2,3,4,5,6,7,false, "string"];
console.log("Data type is " +(typeof myarr));

// Object Literals
let stmarks ={
    ranjeet :89,
    shubham:55,
     raj:98
}
console.log((typeof stmarks));

//functions
function findname(){

}
console.log(typeof findname);
//Date
let date = new Date();
console.log(typeof date)