/* const youtuber1 ={
    name: "ranjeet",
    content: "Programing",
    feather: function(){
        console.log(`very friendaly way of teaching ${this.name} is my
        fav ${this.content} channel`);

    }
 }
//  youtuber1.feather();

const youtuber2 = {
    name: "kuch v",
    content: "programming & vlog"
}
// youtuber1.feather.call(youtuber2);

youtuber1.feather.call([youtuber2]); 

*/

//other method


let name = {
    fname:"ranjeet",
    lname:"yadav",
}

let fullName = function(hometown, state){
    console.log(this.fname +" "+ this.lname+" " + "from"+" " +hometown +"," + state);

}

fullName.call(name, "Siwan", "Bihar");

let name2={
    fname : "sachin",
    lname:"seth",
}

//function borrowing 

// fullName.call(name2, "jaipur", "rajasthan");
fullName.apply(name2,["jaipur", "rajasthan"]);

//bind method

let printMyName = fullName.bind(name2,"jaipur", "rajasthan");
console.log(printMyName);

printMyName();
