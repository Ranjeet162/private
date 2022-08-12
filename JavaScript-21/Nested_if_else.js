/*let winningNumber=19;
let userGuess= +prompt("guess a number");

if(userGuess ===winningNumber){
    console.log("Your guess is right");
}else{

if(userGuess<winningNumber){
    console.log("guess number is too low !!!");
}else{
    console.log("guess number is too high!!!");
}
}
*/

let tempDegree=50;

if(tempDegree<0){
    console.log("extremely cold outside");
}else if(tempDegree<25){
    console.log("wheather is okay");
}else if(tempDegree<35){
    console.log("Lets go for swim");

}else if(tempDegree<45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}
console.log("Hello");


let day=5;
switch(day){
    case 0:
        console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
            break;
            case 2:
                console.log("Tuesday");
                break;
                case 3:
                    console.log("Wednesday");
                    break;
                    case 4:
                        console.log("Thursady");
                        break;
                        case 5:
                            console.log("Friday");
                            break;
                            case 6:
                                console.log("Saturday");
                                default:
                                    console.log("Invalid day");
}