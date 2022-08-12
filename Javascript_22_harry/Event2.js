//mouseover 
/*
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
btn.addEventListener('dblclick',func2);

function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();
}

function func2(e){
    console.log("Thanks its a double click",e);
    e.preventDefault();
}
*/

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("You entered no");
// })


// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('you exited no');
// });


//Mouse leave with color
document.querySelector('.container').addEventListener('mouseleave', function(e){
      console.log(e.offsetX, e.offsetY);
      document.body.style.backgroundColor='red';
    console.log('you exited no');
});