// class

/* class hello{
    message(){
        console.log("Hello Everyoe");
    }
    sorry(){
        console.log("Sorry Everyone");
    }
}
let a = new hello();
a.message();
a.sorry(); 

*/

//constructor


/* 
class student{
    constructor(name, age, education){
        this.studentName = name;
        this.studentAge=age;
        this.studentEduc = education;
    }
    hello(){
        console.log(`my name is ${this.studentName} and my age is
        ${this.studentAge} and educ is ${this.studentEduc}`);
    }
}
let a= new student("ranjeet", 22,"btech");
a.hello(); */

//class another Methods

class fruits{
    name="mango"
     constructor(){
        console.log(this.name)

     }
     getFruits(){
        console.log("function");
        return 'banana'
     }
}
let f1 = new fruits;
console.log(f1.getFruits('banana'));




