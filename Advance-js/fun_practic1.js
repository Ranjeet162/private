// function expression
/* const square = function(num){
    return num*num;
}
console.log(square(6)); */
//this is a Anonymouse function and its output is 36

// first class function
// when one function is passed another function as a parameter and variable

/* function square (num){
    return num*num;
}
function displaySquare(fn){
    console.log("Square is " +fn(6));
}
displaySquare(square); */




// IIFE => immediately invoked function Expression 
// just invoked function 
/* (function square(num){
    console.log(num*num);
})(5); */

// function Hoisting

/* var x=20;
var fun = function(){
    console.log(x);
    var x=10;
        
    
}
// fun(); */  
// undefined output

// spread operator

function multi(num1, num2){
    console.log(num1 *num2);

}
var arr =[8,9];
multi(...arr);     
// o/p 72


//CallBack function
/* a callback fun is a function passed into another fun as an arguments,
wich is then inviked inside the outer fun to complete some kind
of rouitine or action */

