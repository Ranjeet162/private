/*let i=0;
while(i<9){
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);
console.log("Hello Rk");


//for loop

for(var i=0; i<=9;i++){
    console.log(i);
}
console.log("value of i is ",i);
*/

//find sum of given first 50 number
let total =0;
let num =50;
for(let i=1; i<=num; i++){
    total=total+i;
}
console.log(total);

// break Keywords
for(let i=1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}


//Continue Keyword

for(let i=1; i<=10; i++){
    if(i===5){
        continue;
       
    }
    console.log(i);
}
console.log("Hello Rk");


//Do while loop


let j=10;
do{
    console.log(j);
    j++;
}while(j<=9);
console.log("Value of j  is ",j);