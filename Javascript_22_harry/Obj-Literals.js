let  car = {
    name: 'Marut 800',
    topSpeed:89,
    run: function (){
        console.log("Car is running ");
    }
}

//constructor
// new Date();
//creating constructor for car 
function GeneralCar(givenName, GivenSpeed){
    this.name = givenName;
    this.topSpeed = GivenSpeed;
    this.run = function(){
        console.log(`${this.name}is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200-this.topSpeed} than Marcedes`);
    }
}

car1 = new GeneralCar('Nishan ',180);
car2 =  new GeneralCar("Maruti Alto", 80);
car3 = new GeneralCar('Mercedes',900);
console.log(car2);
console.log(car1);
console.log(car1, car2, car3);