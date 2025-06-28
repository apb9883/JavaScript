let arr=[12,-10,45,-23,98,99];
console.log(arr);

let x=arr.sort();
console.log(x);

let x1=arr.sort((a,b)=> a-b);
console.log(x1);

// sort and neglect negative sign
let x2=arr.sort((a,b)=>Math.abs(a)-Math.abs(b));
console.log(x2);