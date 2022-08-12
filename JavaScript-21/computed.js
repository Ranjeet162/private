/*const key1="objkey1";
const key2="objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj= {
    [key1]: value1,
    [key2]:value2
}
console.log(obj);


//spred in array
const array1=[1,2,3,4,5];
const array2=[6,7,8,9,10];
const newArray=[...array1,...array2];
console.log(newArray);
*/


//spred operator in objects

/*const obj1={
    key1:"value1",
    key2:"value2",
};

const obj2={
    key1:"unicvalue",
    key3:"value3",
    key4:"value4",
};
const newObject={...obj2,...obj1};
console.log(newObject);


//object destructuring

const band={
    bandName:" led zeppling",
    famousSong: "stairway to heaven",
};
const{ bandName, famousSong}=band;
console.log(bandName, famousSong);


//Objects inside the Array

const users=[
    { userId: 1, firstName:"ranjeet", gender:'male'},
    {userId: 2, firstName:"sanjeet", gender:"male"},
    {userId:3, firstName:"priya", gender:"female"},
]
for(let user of users){
    console.log(user.firstName);
    console.log(user.userId);
}
*/

// nested destructuring

const users=[
    { userId: 1, firstName:"ranjeet", gender:'male'},
    {userId: 2, firstName:"sanjeet", gender:"male"},
    {userId:3, firstName:"priya", gender:"female"},
]
const [user1,user2,user3]=users;
console.log(user1);


