Math.pow(2,9)
Math.pow(3,1/3);
Math.round(.6);
Math.ceil(.6);
Math.floor(.6);
Math.abs(-5);
Math.max(23,55,6,3,1,7,8,9);
Math.min(4,3,1,9,6,8,90);
Math.random();


//Es6 new methods\

Math.cbrt(29);
Math.hypot(3,4);
console.log(Math.clz32(0xf));         /* 28 */

//infinity , no errors; just infinity
//divide by 0; it is just NaN
console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.isNaN("2"));
// console.log(Number.parseInt(2.9));
console.log(Number.parseInt("3a"));  /* 3 bcz js know its your fault its not convert into number */


let satementOne =.3-.2;
let satementTwo =.2-.1;
console.log(satementOne==satementTwo);
console.log(satementOne ===.1);
console.log(satementTwo ===.1);

console.log(.3-.2);
console.log(.2-.1);




// BigInt

// let google ="1" +"0".repeat(100);
// console.log(BigInt(google));

const number =[2,25,7];
number.sort();
console.log(number[2]);