var a = 'Hello guyes';

function first(){
    var b = 'How are you?';
    
      second();
    function second(){
        var c ="Myself Ranjeet";
        console.log(a+b+c);
        three();
    }
}

function three(){
    var d = "Tell me about yourself";
    console.log(a+b+c+d);
}

first();