// Object
// useed to store data and variables
/* const user ={
  name:"ranjeet",
  age:22
}
console.log(user);
delete user.age;
console.log(user); */


/* const func =(function (a){
    delete a;
    return a;
})(5);
 console.log(func); */  
// output will be 5 bcs its not delete local storage

// Dynamic variable

/* const property ='firstName';
const name ='Ranjeet';

const user ={
    [property]:name,

}
console.log(user); */

/* 
const obj={
    a:'one',
    b:'two',
    a:"three",
};
console.log(obj); */
//o/p is three and two for b bcz last againg value is stored 



// console.log([...'ranjeet']);
//output
//  [  'r', 'a', 'n',
//   'j', 'e', 'e',
//   't'
// ]

// destruncturing of object

let user ={
    name: 'ranjeet',
    age:22,
    fullName:{
        first:'ranjeet',
        last:'yadav'
    },
};
const name ='ranjeet kumar';
const {
    fullName: {first},
} = user;
console.log(user.name);

//another copy method only provide reference not the complete 
// values

let c ={ greeting: 'Hay!'};

let d;
d=c;
c.greeting="Hello Ranjeet";
console.log(d.greeting);
