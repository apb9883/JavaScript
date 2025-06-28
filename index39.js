//Event Listener:- agar mai kisi element ko click karoo, ya fir hover karoo, ya element se mouse ko bahar kar doon to kuchh changes ho.

let x=document.getElementById("Pika");
x.addEventListener("click", function(){
    x.style.color='red';
    x.style.backgroundColor='green';
})

let y=document.getElementById("Mew");
y.addEventListener("mousemove", function(){
    y.style.color='white';
    y.style.backgroundColor='orange';
})

let z=document.getElementById("Bal");
z.addEventListener("mouseenter", function(){
    z.style.color='red';
    z.style.backgroundColor='yellow';
})

let a=document.getElementById("Aven");
a.addEventListener("mouseenter", function(){
    a.style.color='white';
    a.style.backgroundColor='orange';
})
a.addEventListener("mouseleave", function(){
    a.style.color="black";
    a.style.backgroundColor='white';
})

let b=document.getElementById("Iron");
a.addEventListener("click", function(){
    b.style.color='purple';
    b.style.backgroundColor='black';
    b.innerHTML="Loha ka devta";
})

let c=document.getElementById("Captain");
a.addEventListener("click", function(){
    c.style.color='blue';
    c.style.backgroundColor='Orange';
    c.innerHTML="SuperHuman ka captain";
})



