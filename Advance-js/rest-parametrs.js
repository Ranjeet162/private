//first method

/* function sum(...agrs){
    let result = 0;
    for( let i=0; i<agrs.length; i++){
        result += agrs[i];
    }
    console.log(result)

}
sum(3,5,7,9);   //24 */

//Second Method

/* function sum(name,...agrs){
    

    let sum =0;
    for( let i in agrs){
        sum += agrs[i];
    }
    console.log(sum);
}

sum(20,30,40);
sum(20,30); 
*/

// Another method

function sum(...totalSum){
    console.log(...totalSum);
    let allTotal =0;
    for(let i of totalSum){
        allTotal +=i;
    }
    console.log(allTotal);
}
sum(1,2,3,4,5,6,7,8,9);


function fun(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun('Ranjeet', 'nara','pele','messi','Edan');