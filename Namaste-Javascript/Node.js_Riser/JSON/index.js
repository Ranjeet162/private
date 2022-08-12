/* to create a JSON file and convert

const bioData={
    name : "Ranjeet",
    age :26,
    channel :"ranjeet",
};
 const jsonData = JSON.stringify(bioData);
 const objData = JSON.parse(jsonData);
 console.log(objData.channel);
*/
//1: convert to Json
//2: and then again add to file 
//3: read the file
//4: again convert back to js object ori
//5: console.log


const fs = require('fs');
const bioData = {

};

const jsonData = JSON.stringify(bioData);
//fs.writeFile("json2.json", jsonData,(err)=>{
    // console.log("done");
// });
fs.readFile("json2.json", "utf-8", (err,data)=>{
    // console.log("data");
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
        
    
});

