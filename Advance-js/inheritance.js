/* class employee {
  constructor(name) {
    console.log("constructor : Employee" + name);
  }
}

class manager extends employee {}
let a = new manager("Ranjeet"); */

//Another example

class Catogary{
  dryFruit(){
    return "Almonds is a dry fruit"
  }
  pomeFruit(){
    return "Apple is a pome fruit"
  }
}
class fruits extends Catogary{
  constructor(){
    
    super()
    console.warn("constructor")
  }
  getFruits(){
    return "You got Apple";
  }

}
let f1 = new fruits;
let c1 = new Catogary;
console.log(c1.dryFruit())
console.log(f1.getFruits());
