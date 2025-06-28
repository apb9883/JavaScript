let main=document.getElementById('main');
let arr=["https://i.pinimg.com/736x/cb/a5/24/cba5241c4db2faa1cc1cd7c092ade9a2.jpg",
          "https://i.pinimg.com/736x/87/9c/4f/879c4f3af3aad89343e7fee7b676c500.jpg",
          "https://i.pinimg.com/736x/1c/46/8a/1c468a1d726a570ca316f10eed2aab1c.jpg",
          "https://i.pinimg.com/736x/98/0b/d2/980bd2451a641e98f1b0df646da0a256.jpg",
          "https://i.pinimg.com/736x/d4/66/85/d46685181a11b471c3b1984ff2516209.jpg",
          "https://i.pinimg.com/736x/bf/5e/29/bf5e29f631c289af482687aa7739d67c.jpg",
          "https://i.pinimg.com/736x/45/e9/73/45e973e269beca518148f50082f2055e.jpg",
          "https://i.pinimg.com/736x/ad/1f/9c/ad1f9c1a9b0f1c56cd6f4ba2bf3b3faa.jpg"];

let s="";          
for(let i=1; i<=65; i++){
  let r=Math.floor(Math.random()*arr.length);
          s+=`<div class="card">
            <img src="${arr[r]}" alt="">
        </div>`;
}
main.innerHTML=s;



          
