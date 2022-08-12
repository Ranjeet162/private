var promi = new Promise((resolve,reject) =>{
    const x= 'ranjeet';
    const y= 'sanjeet';
     
    if(x.length =y.length){
        
        resolve();
    }else{
        reject();
    }
});

promi.then((resolve) =>{
    console.log('you are ranjeet');
}).catch((error) =>{
    console.log(error);
});