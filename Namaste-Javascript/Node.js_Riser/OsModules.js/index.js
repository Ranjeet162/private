const os = require("os");
// console.log(os.arch());

// to check free memory
//  const freeMemory = os.freemem();
//  console.log(freeMemory);
// console.log(`${freeMemory/1024/1024/1024}`);

//fond total free memory
// const totalMemory= os.totalmem();
// console.log(`${totalMemory / 1024/ 1024/1024}`);


//find host name
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());

console.log(os.tmpdir());
console.log(os.type());
