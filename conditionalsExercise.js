let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

if (randomNum >= 4){
    console.log("Equal to or more than 4");
} else if (randomNum >= 2){
console.log("Equal to or more than 2");
} else {
    console.log( "Equal to 1" );
}
if (randomNum !== 3){
    console.log("Not Equal to 3");
}
if (randomNum != 3 && randomNum != 5){
    console.log("Not Equal to 3 AND not Equal to 5");
}
if (randomNum === 2 || randomNum === 4){
    console.log("Equal to 2 or Equal to 4");
}
