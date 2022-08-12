/* function authorName(){
    console.log(`Auther name is Ranjeet`);
}
authorName();

*/

//other method

/* (function (){
    var aName = 'ranjeet';
    console.log('Author Name is '+aName);
})(); 

*/


//another method

(function (aName){
    // var aName = 'ranjeet';
    console.log('Author Name is '+aName);
})('ranjeet');