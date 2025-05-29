function checkNumber(){
    let number=45;
    if(number%2==0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}

let OddorEven=checkNumber();


function isOdd(number){
    let rem=number%2;
    let isOdd=rem==1;
    return isOdd;
}

console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(6));
console.log(isOdd(7));


function larger(Number1, Number2){
    if(Number1>Number2){
        return Number1;
    }
    else{
        return Number2;
    }

    // return Number1>Number2 ? Number1:Number2;
}
    console.log(larger(4,5));
    console.log(larger(7,5));
    console.log(larger(8,30));
    console.log(larger(39,32));


    function toFahrenheit(celciusValue){
        return 9/5*celciusValue+32;
    }

    console.log(toFahrenheit(38));
    console.log(toFahrenheit(0));
    console.log(toFahrenheit(100));