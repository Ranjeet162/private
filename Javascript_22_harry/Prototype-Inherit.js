const proto = {
    slogan : function(){
        return `This company is the best`;
    },
    changeName: function(newName){
        this.name = newName
    }
}
const ranjeet = Object.create(proto);
ranjeet.name ="Ranjeet";
ranjeet.role = "Programmar";
// ranjeet.changeName ="Ranjeet3";
// console.log(ranjeet);

const Ranjeet3 = Object.create(proto, {
    name:{value:"ranjeet", writable:true},
    role:{value:"Programmer"},
});
Ranjeet3.changeName("Ranjeet2");
// console.log(ranjeet);


//employee constructor

function Employee(name , salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
//slogan
Employee.prototype.slogan = function(){
    return `This company is the best , Regards, ${this.name}`;
}

let rk = new Employee("Ranjeet", 345634, 84);
console.log(rk.slogan());

function Programmar(name, salary, experience, language){
    Employee.call(this, name , salary,experience);
    this.language = language;
}
//Inherit the Prototype
Programmar.prototype = Object.create(Employee.prototype);

//Manualyy set the constructoe
Programmar.prototype.constructor = Programmar;
let rohan = new Programmar("Rohan" , 2 ,0, "javascript");
console.log(rohan);