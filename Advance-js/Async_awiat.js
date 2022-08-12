/*  async function test(){
    return "Hello Rk";
}
// console.log(test());
test().then((result) =>{
    console.log(result);
}); 

*/

//Another ways 
/* let test = async () => "Hello";

test().then((result) =>{
    console.log(result);
});

*/

 //with await function

 async function test(){
    console.log("1 : Message");
    await console.log("2 : Message ");
    console.log("3: Message ");
}
// console.log("1: Message");
test();
console.log("4: Message"); 



/// other methods

/* async function test(){
    try{
        const response = await fetch("json/student_data.json");
        const students = await response.json();
        return students;
    }catch(error){
        console.log(error);
    }
   }

test().then((res) =>{
    console.log(res);
}); */