const promi2 =new Promise((resolve, reject) =>{
    setTimeout(() => {
        let myfav = [{
            name:"ranjeet",
            age:22
        }];
        resolve(myfav);
        reject('Not find');
    }, 2000);
});
promi2.then((myfav) =>{
    console.log(myfav);
}).catch((error) =>{
    console.log(error);
});