// map function
let arr=[1,6,3,8];
console.log(arr);

function twice(x){
    return 2*x;
}

let brr=arr.map(twice);
console.log(brr);

let cube=arr.map(function(x){
    return x*x*x;
})


// Arrow function
let square=arr.map((x)=>{
    return x*x;
})


console.log(square);
console.log(cube);

arr=arr.map(x=>x*10);
console.log(arr);

