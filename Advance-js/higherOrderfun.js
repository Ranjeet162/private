const questions = (name) =>{
    if(name === 'ranjeet'){
        return function(topic){
            console.log(`Hi ${name} What is ${topic}?. please explain us`);
        }
    }if(name === 'manjesh'){
            return function(topic){
                console.log(`Hi ${name} What is ${topic}?. please explain us`);
            }
        }if(name === 'dipu'){
                return function(topic){
                    console.log(`Hi ${name} What is ${topic}?. please explain us`);
                }
    }else{
        return function(){

        
        console.log('mat bata fir');
    }
}
}
/* questions("ranjeet")("topic");
questions("manjesh")("full stack developer");
questions("dilip")("frontend Developer"); 
*/

const condi1 = questions("ranjeet");
condi1("UI");
condi1("javascript");
condi1("react");