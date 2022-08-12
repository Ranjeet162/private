const myFavProg = ['javascript','PHP','java','python','c++'];

// for(let x=0; x<myFavProg.length; x++){
//     console.log(myFavProg[x])
// }

//forEach Method

myFavProg.forEach(function(arrayValue,index){
    console.log(index +"--"+ arrayValue);
});

// Create one array . forEach element in the array: and Add the
// value 100 to each items and update the elements value

const NewArray =[ 10, 20, 30, 40, 50];
NewArray.forEach(function(value, index,array){
    console.log(array[index]+100);
})