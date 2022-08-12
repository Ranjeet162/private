/* function *generators(){
    yield 'yield no 1';
    yield ' yield no 2'
}
let g = generators();
console.log(g.next());
console.log(g.next());
g.next();
console.log(g.next());

*/

// .. use for of loop

function *generators(){
    let nextNum =400;
    while(true){
        yield(nextNum ++);
    }
}

let g = generators();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


