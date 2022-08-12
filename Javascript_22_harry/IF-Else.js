/*const age = 22;
if(age!=22){
    console.log('Age is 22')
}
if(age!==22){
    console.log('Age is 65');
}
else{
    console.log('Age is not 22');
}
*/


//2nd method

/*const age = 20;
const doesDrive = false;
if(doesDrive || age >18){
    console.log('you can drive');
}else{
    console.log("you can not drive");
}
*/

//3rd Methods

const age = 29;
const doesDrive = true;
// console.log(age==45? 'Age is 45': 'Age is not 45');

//switch case
switch (age){
    case 30:
        console.log('you are 18');
        break;
        case 28:
            console.log("you are 28");
            break;
            case 30:
                console.log("you are 30");
                break;
                default:
                    console.log('you are unknown');
                    break;
}