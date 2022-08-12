const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/Ranjeet" ,{ useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("connection successfull....")).catch((err)=>console.log(err));



//schema in mongoose
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
const reactPlaylist = new reactPlaylist({
    name:"React Js",
    type:"Front End",
    videos: 80,
    active: true
});
reactPlaylist.save();