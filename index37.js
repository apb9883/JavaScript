console.log("Hello Bhai");

let x=document.querySelector('h1');
x.style.backgroundColor='red';
console.log(x);
x.innerHTML="Changed";

//select all html element of h3 by using this query
let x1=document.querySelectorAll('h3');
console.log(x1);

//select all html element of class yes  by using this query 
let x2=document.querySelectorAll(".yes");
console.log(x2);

//change style of one query selector
let x3=document.querySelector('h2');
x3.style.color='blue';
x3.style.fontFamily="Gill Sans";