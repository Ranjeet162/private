/* let data ={
    list:'friend',
    names:['ranjeet', 'sonu','manjesh'],
    getFriends:function(){
        console.log(this.names);
    }
}
data.getFriends(); */

//another methods
let data={
    list:'friend',
    names:['ranjeet', 'sonu','manjesh'],
    getFriends:function(){
    
        this.names.map((item) =>{
            console.log(this.list,item);
        })
}
}
data.getFriends(); 

