let array=[5,6,8,10,17,15,21];
array.push(7);
console.log(array);
array.unshift(4);
console.log(array);

function getElement(arr, position){
    return arr[position-1];
}
let arr=[1,3,6,3,4,8,9]
console.log(getElement(arr,5));

