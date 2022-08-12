// console.log(Math.PI);
// console.log(Math.E);

// let x =4.9;

// let x = Math.ceil(2.4);
// let x = Math.pow(10,2);
// let x = Math.sqrt(10);
/* let x = Math.min(12 ,7,2,3,4);
let y = Math.max(12 ,7,2,3,4);
console.log(x);
console.log(y); */


//Random number

// let l = Math.random();
// let l = Math.floor(Math.random() *10);    //0 to 10

// let l = Math.floor(Math.random() *100) +1;  //never get 0 
// console.log(l);




//  let m = Math.floor(Math.random() * (28 -19) ) +19;  // get 19 t0 28 b/n no
//  console.log(m);


function getRandom(min, max){
    let x= Math.floor(Math.random()* (max - min +1))+ min;
    return x;
}
console.log(getRandom(10, 20));
