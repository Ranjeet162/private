class Employee{
    constructor(givenName,givenExperience, givenDivision){
        this.name =givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the Best`;
    }
    joiningYear(){
        return 2019-this.experience;
    }
    static add(a,b){
        return a*b;
    }
}

class Programmar extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName,givenExperience,givenDivision);
        this.language = language;
        this.github = this.github;
    }
    favaritrLanguage(){
        if(this.language =='Javascript'){
            return 'Javascript';
        }else{
            return 'Python';
        }
    }
    static multiply(a,b){
        return a+b;
    }

}

// ranjeet = new Employee("Ranjeet", 34, "Division");
// console.log(ranjeet.joiningYear());

rohan = new Programmar("Ranjeet" ,3,"Laye", "80", "Ranjeet76")
console.log(rohan);
console.log(rohan.favaritrLanguage());
console.log(Employee.add(34,7));