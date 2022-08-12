// lexical scope
//when calling outside declared variable is calling inside the scope

/* var userName ="Ranjeet";
function local(){
   
    console.log(userName);
}

local(); */

// closures
/* A closures is the combination of a bundale together enclosed 
with reference to the surrounding state */
// its created when every time when function is created

/* let count =0;
(function printCount(){
    if (count ===0){
        let count=1;    /* shadowing of global scope 
        console.log(count);
    }
    console.log(count);
})
(); */
// this is a anonymouse function

// blockScope and setTimeout with clsours

function a(){
    // for(let i=0; i<3; i++){  o/p 0,1,2 bcz of block scope
    for(var i=0; i<3; i++){   //3,3,3 bcz of function scope

    
    setTimeout(() => {
        console.log(i);
        
    }, i*1000);
}
}
a();
