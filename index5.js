let age=50;
let gender='Male';
let finalDiscount;

if(age<=5){
    finalDiscount=100;
}
else if(gender==='Female'){
    finalDiscount=50;
}
else if(age<=8){
    finalDiscount=50;
}
else if(age>=65){
    finalDiscount=30;
}
else{
    finalDiscount=0;
}

console.log(`Your final discount is ${finalDiscount}`);
