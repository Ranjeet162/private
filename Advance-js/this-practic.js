// this
// this keyword to refernce the owner \
//this is point to global objects

/* this.a =5;
const getPram =() =>{
    console.log(this.a);
};
getPram();

*/ 
// give 5 o/p
/* let user ={
    name: 'ranjeet',
    age:22,
    getDetails(){
        console.log(this);
    },

}
user.getDetails(); */

//in class use of this keyword

/* class user1{
    constructor(n){
        this.name =n;
    }
    getName(){
        console.log(this.name);
    }
}
const User1 = new user1('ranjeet');
console.log(User1.getName); */

//interview 

const user ={
    firstName :"ranjeet",
    getName(){
        const firstName ='ranjeet';
        return this.firstName;
    },
};
console.log(user.getName());



