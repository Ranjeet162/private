/* const thanku = function(){
    console.log('thanku your support');
}
thanku();

*/

/* const youtub = {
    name:"ranjeet",
    quali: function(){
        console.log('I did b tech in ece');
    }
}
youtub.quali(); 

*/

//pass arguments in function

const myName =() =>{
    return "Hello";
}

const greeting = (sayHii, name) =>{
    console.log(sayHii() + " "+name);
}
greeting(myName,"ranjeet");
