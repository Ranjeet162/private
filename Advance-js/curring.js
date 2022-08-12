// curring => its one agruments at a time and returning a function
function f (a){
    return function(b){
        return `${a} ${b}`;

    };

}
console.log(f(5)(6));

//to use any arguments again and again 
//avoid duplicate parameters\\


//write a curring fun to add 3 func sum

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(sum(4)(8)(9));



function evaluate(operation){
    return function(a){
        return function(b){
            if(operation ==='sum') return a+b;
            else if(operation ==='multyply') return a*b;
            else if(operation ==='divide') return a/b;
            else if(operation ===' substract') return a-b;
            else return 'invalid operation';
        }
    }
}
console.log(evaluate('sum')(5)(8));
console.log(evaluate('multyply')(5)(8));
console.log(evaluate('divide')(5)(8));
console.log(evaluate('substract')(5)(8));



//simple exapmle

function add(a){
    return function(b){
        return function(){
            return a+b;
        }
    }
}
console.log(add(4)(7)());