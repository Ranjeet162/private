console.log("Element Selectors");

let element = document.getElementById('myfirst');
// element = element.className;
//  element = element.childNodes;
// element = element.parentNode;
// element.style.color ='red';
element.innerText = 'ranjeet is a good boy';
element.innerHTML = '<b> Ranjeet';
console.log(element.innerText);


let sel = document.querySelector('.child');
sel = document.querySelector('#myfirst');
sel = document.querySelector('div');

console.log(sel);


//multipal selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(Element=>{
    console.log(element);
    element.style.color = 'blue';
});
