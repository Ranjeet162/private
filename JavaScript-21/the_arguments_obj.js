function add(){
    if(arguments.length==0){
        console.log("No arguments are passed !");
    }else{
        let sum =0;
        for(let i=0; i<arguments.length; i++){
            
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}

let additions =add;   //now you can also call additions

additions(12,3,5,7);

add(4,5,7,8);