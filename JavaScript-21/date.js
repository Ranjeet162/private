// let x= new Date(2019,11,24);
// console.log(x);


let x = new Date("2022");
let y= new Date("2012");

// console.log(x.getFullYear());
// x.setFullYear(2012);
// console.log(x.getHours());
// x.getDate(x.setDate()+10);

// console.log(x);

if(y>x){
    console.log("x is pass date");
}else if( x>y){
    console.log("x is future date");

}else{
    console.log("x is same date");
}