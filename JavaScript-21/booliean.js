let score = 100
if(score ===100){
    console.log("great score");

}
console.log(typeof(false.toString()));

// console.log(typeof(null));         /*null is a language keyword and its an Object in js  */
// console.log(typeof(undefined));       /* UNDEFINED IS A PREDEFINED GLOBAL CONSTANT */

/* Both define absense of value */


/* Symbol */

String ("Ranjeet");
"Ranjeet"
let mySymbol =Symbol("P1");
let mySymbol2 =Symbol("p1");

let priority = Symbol.for("p2")
let priority2 =Symbol.for("p2");

console.log(priority === priority2);

console.log(mySymbol);


/* Global Object */
/*
constants like: undefined, NaN;
functions like: isNaN(), parseInt(), eval();
constructor like: Date(), String(), Object();

*/

// this are not reserved keywords, null is a reserved keywords