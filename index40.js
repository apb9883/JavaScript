
// for changes in box 1
let s1=document.getElementById("shape1");
s1.addEventListener("mouseenter", function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML=`<h1>1</h1>`
})
s1.addEventListener("dblclick", function(){
   let r1=Math.floor(Math.random()*256);
   let r2=Math.floor(Math.random()*256);
   let r3=Math.floor(Math.random()*256);
   s1.style.backgroundColor=`rgb(${r1}, ${r2}, ${r3})`;
})



// for changes in box 2
let s2=document.getElementById("shape2");
let clr=`green`;
s2.addEventListener("mouseenter", function(){
    if(clr==`green`){
        s2.style.backgroundColor=`green`;
        clr=`red`;
    }
    else if(clr==`red`){
        s2.style.backgroundColor=`red`;
        clr=`yellow`;
    }
    else if(clr==`yellow`){
        s2.style.backgroundColor=`yellow`;
        clr=`blue`;
    }
    else{
        s2.style.backgroundColor=`blue`;
        clr=`green`;
    }

})
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor=`white`;
})



// for changes in box 3
// rgb(a,b,c) where a,b,c lies between 0 to 255
let s3=document.getElementById("shape3");
s3.addEventListener("mouseenter", function(){
   let r1=Math.floor(Math.random()*256);
   let r2=Math.floor(Math.random()*256);
   let r3=Math.floor(Math.random()*256);
   s3.style.backgroundColor=`rgb(${r1}, ${r2}, ${r3})`;
})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor=`white`;
})



// for changes in box 4
let s4=document.getElementById("shape4");
s4.addEventListener("click", function(){
   let r1=Math.floor(Math.random()*256);
   let r2=Math.floor(Math.random()*256);
   let r3=Math.floor(Math.random()*256);
   s1.style.backgroundColor=`rgb(${r1}, ${r2}, ${r3})`;
   s2.style.backgroundColor=`rgb(${r2}, ${r3}, ${r1})`;
   s3.style.backgroundColor=`rgb(${r3}, ${r1}, ${r2})`;
})
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor=`white`;
    s2.style.backgroundColor=`white`;
    s3.style.backgroundColor=`white`;
})



let main=document.getElementById("main");
let crsr=document.getElementById("cursor");
main.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})