// while loop

let num=1;
while(num<=10){
    console.log(num);
    num=num+1;
}


// do-while loop

let number=0;
do{
    console.log(number);
    number++;
}
while(number<5);


// for loop

for(let numb=1; numb<=10; numb++){
     console.log(numb);
}



let nums=[3,6,34,65,37];
for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}


let numbering=[45,65,75,65];
let sum=0;
for(let k=0; k<numbering.length; k++){
    sum=sum+numbering[k];
}
console.log(`sum of the array is ${sum}`);

let squares=[];
for(let n=0; n<numbering.length; n++){
   squares[n]=numbering[n]*numbering[n];
}
console.log(squares);