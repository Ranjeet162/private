 const youtuber1 ={
    name: "ranjeet",
    content: "Programing",
    feather: function(){
        console.log(`very friendaly way of teaching ${this.name} is my
        fav ${this.content} channel`);

    }
 }
//  youtuber1.feather();

const youtuber2 = {
    name: "kuch v",
    content: "programming & vlog"
}
youtuber1.feather.call(youtuber2);