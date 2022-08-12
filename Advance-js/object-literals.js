//new method

/* let n ="student";

var obj = {
    [n + "name"]: "Ranjeet",
    course: "Btech"
};
console.log(obj); */

//another method

let name =" Ranjeet";
let course = "Btech";

function student(name, course){
    return{name, course};
}
console.log(student(name,course));