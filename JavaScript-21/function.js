/*
function singhhappybirthday(){
    console.log("happy birthday to you.............");

}
singhhappybirthday();
//function
function twoPlusFour(){
    return 4+3;

}
const returnValue=twoPlusFour(4,5);
console.log(returnValue);
*/

function sum(num1, num2){
    return num1+num2;
}
const returnValue=sum(5,7);
console.log(returnValue);
console.log(undefined+undefined);

//odd and even

function isEven(number){
    if(number%2===0){
        return true;
    }
    return false;
}
console.log(isEven(4));


//multiplications

for( let i=1;i<=10; i++){
    document.write(`2 * ${i} = ${2*i}`);
    document.write("<br>");
    
}