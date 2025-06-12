let buttonElement=document.querySelector('#my-Button1');
let behaviour=event=>console.log(`I'm clicked`);
buttonElement.addEventListener('click',behaviour);