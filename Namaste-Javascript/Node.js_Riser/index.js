//  const fs= require("fs");
// fs.writeFileSync('read.txt', "Welcome to my chanel");
// fs.writeFileSync('read.txt', "Hay Ranjeet welcome to my page");

const { fstat } = require("fs");


//append
// fs.appendFileSync("read.txt", "how are you thank you");

//Buffer 
// const buf_data=fs.readFileSync("read.txt");
// console.log(buf_data);
//output   <Buffer 48 61 79 20 52 61 6e 6a 65 65 74 20 77 65 6c 63 6f 6d 65 20 74 
            //  6f 20 6d 79 20 70 61 67 65 68 6f 77 20 61 72 65 20 79 6f 75 20 74 68 61 6e 6b 20 79 6f ... 1 more byte>

        //   const buf_data = fs.readFileSync("read.txt");
            // org_data=buf_data.toString();
            // console.log(org_data);


            // To Rename the 
            
            // fs.renameSync("read.txt", "Readwrite.txt");

// const fs = require("fs");
// fs.writeFile("read.txt", "Today is awesome day for me:)",(err)=>{
    // console.log("files is created");
    // console.log(err);
// });

//Append File
// const fs = require('fs');
// fs.appendFile("read.txt","please like and share this page",(err)=>{
   
    // console.log("Your Task is completed");
    // console.log(err);
// });

//read File from file

// fs.readFile("read.txt","utf-8" ,(err, data)=>{
    // console.log(data);
    // console.log(err);
// });

//how to check Asynch And synchronous

// const fs= require("fs");
// const data = fs.readFileSync("read.txt", "utf-8",(err,data)=>{
    // console.log(data);
// });
// console.log("after the data ");

//Create A folder
// const fs = require('fs');
// fs.mkdir('ranjeet',(err)=>{
    // console.log('folder created');
// });



//created file in folder
// const fs= require('fs');
// fs.writeFile("./ranjeet/bio.txt", "my name is ranjeet kumar",(err)=>{
    // console.log('file is created');
// }
// );

//add new line in file

const fs= require('fs');
// fs.appendFile("./ranjeet/bios.txt",   " please help me to visit my page again", (err)=>{
    // console.log("files data is appended");
    // console.log(err);
// });

//Rename the file

// fs.rename("./ranjeet/bio.txt",  "./ranjeet/myBio.txt",(err)=>{
    // console.log("rename the file");
// });


//delete the file

// fs.unlink("./ranjeet/mybio.txt", (err)=>{
    // console.log("file is deleted");
// }
// );


//delete file 
// fs.unlink("./ranjeet/bios.txt", (err)=>{
    // console.log("file is deleted");
// });



//delete folder

fs.rmdir("./ranjeet", (err)=>{
    console.log("folder is deleted");
});