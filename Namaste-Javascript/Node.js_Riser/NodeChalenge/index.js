const fs = require("fs");
// fs.mkdirSync("Ranjeet");

// fs.writeFileSync("Ranjeet/bio.txt", "My name is Ranjeet kumar yadav");

// fs.appendFileSync("Ranjeet/bio.txt", "please give your feedback :");

//Decode the binary code into string
// const data =fs.readFileSync("Ranjeet/bio.txt" , "utf8");
// console.log(data);


// fs.renameSync("Ranjeet/bio.txt", "Ranjeet/myBio.txt");

//To delete the file 
// fs.unlinkSync("Ranjeet/myBio.txt");

// to delete folder 

fs.rmdirSync("Ranjeet");