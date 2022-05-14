let personagem = document.querySelector("#personagem");
let quadrado = document.querySelector("#quadrado");
let body = document.querySelector("body");

body.addEventListener("keydown", function () {
  if (personagem.classList != "animar") {
    personagem.classList.add("animar");
  }
  setTimeout(function () {
    personagem.classList.remove("animar");
  }, 500);
});
let testarColisao = setInterval(function(){
      let topoPersonagem = parseInt(
          window.getComputedStyle(personagem).getPropertyValue('top')
      )
      let EsquerdaQuadrado = parseInt(
          window.getComputedStyle(quadrado).getPropertyValue('left')
      )
      if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
          quadrado.style.animation = "none";
          quadrado.style.display = "none";
          alert("Você perdeu")
      }
},10)
