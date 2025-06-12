let array=[1,2,3,4,5,6,7,8,9,10];
let odd=array.filter((num,index)=>{
    if(num%2==1){
        return true;
    }
    else{
        return false;
    }
});
console.log(odd);

let squares=array.map(num=>num*num);
console.log(squares);