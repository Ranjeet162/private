 const functionA =()=> {
    console.log(`calling from funA`);
 }
  const functionB =() => {
    setTimeout(() => {
        let myfav = [1,2,3,4, `hello from funA`];
       console.log(myfav);
       console.log(`calling from funB`)
      }, 2000);
     
  }

  functionB();
 functionA();