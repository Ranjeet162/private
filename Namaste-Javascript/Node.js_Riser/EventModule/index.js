 
 /* To Event module create emitter and callbacks
 const EventEmitter = require("events");
 const event = new EventEmitter();
  event.on("sayMyName", ()=>{
      console.log("your name is ranjeet");
  });
  event.on("sayMyName" , ()=>{
      console.log("your name is yadav");
  });
  event.on("sayMyName", ()=>{
      console.log("your name is rk");
  });
 event.emit("sayMyName");
 */

 //registering for event with callback perameters

 const EventEmitter = require("events");

 const event = new EventEmitter(); 
 event.on("checkPage", (sc, msg)=>{
     console.log(`statue code is ${sc} and the page is ${msg}`);

 });
 event.emit("checkPage", 200, "ok");