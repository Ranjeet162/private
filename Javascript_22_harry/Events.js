document.getElementById('heading').addEventListener('click',function(e){

    // console.log('you have clicked the heading');
    let variable;

    console.log('you have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
     variable = Array.from(e.target.classList);

     variable = e.target.dispatchEvent;
     variable = e.offsetX;
     variable = e.offsetY;
     

    console.log(variable);

});
    