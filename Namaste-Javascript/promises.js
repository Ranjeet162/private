/*async function ranjeet (){
    return "ranjeet";
}

let a = ranjeet();
console.log(a);

*/

// Async await

async function ranjeet(){
    console.log("Inside the ranjeet function");

    const response = await fetch ('https://api.github.com/users');

    console.log('before response');
    const users = await response.json();

    console.log('users resolved');
    return users;
}

console.log("Before calling ranjeet");
let a= ranjeet();

console.log("After calling ranjeet");
console.log(a);

a.then(data=>console.log(data))
console.log("Last line of this javascript line")
;


