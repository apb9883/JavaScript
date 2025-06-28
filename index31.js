// Callback function:- A function wich passes under another functions.

function product(a,b,c){
    return a*b*c;
}
 
function fun(a,b){
    console.log(a-b);
}

fun(product(3,4,7),10);