// console.log(this);
/* 
function sum (){
    var add = 2+4;
    console.log(add);
    console.log(this.add);
}
sum();

*/
'use strict'

const obj ={
    name: 'Ranjeet',
    course: 'Btech',

    sum: function(){
        var add = 4+6;
        console.log(add);
        // console.log(this.name);
        console.log(this)
    }
}
// obj.sum();
sum();