let sum=function(num1, num2){
    return num1+num2;
}
console.log(sum(4,5))
let newSum=sum;
console.log(newSum(7,8));


let sumThreeNumbers=function(num1, num2, num3, sumTwoNumbers){
    let sum1=sumTwoNumbers(num1,num2);
        return sumTwoNumbers(sum1, num3);
    }

    console.log(sumThreeNumbers(4,5,7,sum));

    console.log(sumThreeNumbers);
    console.log(typeof sumThreeNumbers);


    let subtract=(num1, num2)=>{
        return num1-num2;
    }

    console.log(subtract(78,48));


    let square=(num)=>{
       return num*num; 
    }

    console.log(square(14));

    let cube=num=>num*num*num;
    console.log(cube(8));