// for(let i=0; i<100; i++){
    // console.log(i);
// }
// let j=0;
// while(j<100){
    // j +=1;
// }


/*let k =0;
do{
   
 console.log(k+1);
 if(k===5){
     break;

 }
 console.log(k+1);
 k +=1;
}while(k<10);
console.log('done');
*/

// for loop in Array

/*let arr =[2,3,5,7,8,9];

for(let i=0; i<arr.length; i++){
    const element = arr[i];
    console.log(element)
}
console.log('done');

*/


//for in

/*let obj ={
    name:"Ranjeet",
    age:22,
    type:"Dangerous Programmer",
    os:'Ubuntu'
}

for(let key in obj){
    console.log(`The ${key} of objects is ${obj[key]}`)
}
console.log('done');
*/

//for each loop

let arr = [2,3,4,5,6,7,5,4];
arr.forEach(function(element,index, array){
    console.log(element,index,array);
});