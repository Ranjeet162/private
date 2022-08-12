/* let a=20;
let b=10;
[a,b] =[b,a];

console.log(`the value of a ia ${a}and B is ${b}`); 
*/

class student{
    constructor(name ,age , education){
        this.MyName= name;
        this.MyAge = age;
        this.MyEducation = education;
    }
    MyBio(){
        console.log(`Hi my Name is ${this.MyName} and my age is
        ${this.MyAge} and my educ  is ${this.MyEducation}`);
    }
}
let obj1=new student('Ranjeet', 22,'Btech');
let obj2 = new student('sanjeet', 19,'iti');

obj1.MyBio();
obj2.MyBio();