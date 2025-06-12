let multiply=(num1,num2)=>num1*num2;
console.log(multiply(4,5));

let printGreeting = () => {
    console.log('Namaste');
}

let printTwice = inputFunction => {
    inputFunction();
    inputFunction();
}

printTwice(printGreeting);