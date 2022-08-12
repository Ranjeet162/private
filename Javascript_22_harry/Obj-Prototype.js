let obj3 ={
    name: 'ranjeet',
    channel: 'i dont have any channel',
    address: 'katwar',
}
function obj (givenName){
    this.name = givenName
}
obj.prototype.getName = function(){
    return this.name;
}
let obj2 = new obj('Rk');
console.log(obj2);
