let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);

function fe(x){
if(x%2==0) return true;
else return false;
}

let vrr=arr.filter(fe);
console.log(vrr);

let vrr1=arr.filter(function fe(x){
if(x%2!=0) return true;
else return false;
})
console.log(vrr1);

let vrr2=arr.filter((x)=>{
    if(x<5) return true;
    else return false;
})
console.log(vrr2);

let vrr3=arr.filter(x=>(x>5));
console.log(vrr3);