/* let number = [100,200,300];
 let iter = number [Symbol.iterator]();

 iter.next();
 console.log(iter.next().value); // to print value only

 console.log(iter.next().done);
//  console.log(iter.next());

*/ 

//using while loop to print values

let numbers = [100,200,300,400];

let iter = numbers[Symbol.iterator]();

let result = iter.next();

while(!result.done){
    console.log(result.value);
    result = iter.next();
}

//for of loop

let str = "Ranjeet kumar";
for(let char of str){
    console.log(char);
}

