
   /* const mygreet = function(name,thank='thank You'){

    let msg = `Happy Birthday ${name} How I Wish I could 
    fly to you right now and be with you on this special
    day of yours. But remember, my good wishes are always 
    there with you. ${thank}!`;
    return msg;
}
let name ='Ranjeet';
let name2 ='Mohit';
let val = mygreet(name,'Thanks a lot');
console.log(val);
*/

//function Expression

/*const myobj = {
    name:"Ranjeet",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game());
arr=['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index,array){
    console.log(element,array,index);
});

*/

//Block Scope 

//Let and Const has Block level scope
//var has function level scope

if(i){
let i=234;
console.log(i);
}
function ui(name){
    i=9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Ranjeet"),i);