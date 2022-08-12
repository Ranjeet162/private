/* let complete = false;

let promise = new Promise(function(resolve, reject){
    if (complete){
        resolve("I am SuccessFull");

    }else{
       reject("I am Fail");
    }
});


console.log(promise); */


// ..//second method

/*function prom(complete){
    return new Promise(function(resolve, reject){
        console.log("FatChing data please wait");
        if(complete){
            resolve("I am SuccessFull");
        }else{
            reject("I am Failed");
        }
    });
}

let OnFulFilMen = (result) => {
 console.log(result);
}
let OnRejection = (error) =>{
  console.log(error);
}

prom(true).then(OnFulFilMenT);
prom(true).catch(OnRejection); */
// console.log(true);




//check promise with divide

function prom(a,b){
    return new Promise(function(resolve, reject){
        console.log("fetching data please wait");
        var c= a/b;
        setTimeout(() =>{
            if(a,b){
                resolve(`your answer is: ${c}`);
            }else{
                reject("failed to calculate");
            }
        },2000)
        });
    }
    prom(5,0).then((result) =>{
        console.log(result);
    }).catch((error) =>{
        console.log(error);
    });

