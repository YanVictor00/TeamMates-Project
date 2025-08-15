const roda = document.querySelector('.background-image');
const itens = document.querySelectorAll('.perfil');
let angle = 0;

function girarRoda() {
  angle += 0.3;
  roda.style.transform = `rotate(${angle}deg)`;

  itens.forEach(item => {
    item.style.transform = `rotate(${-angle}deg) translate(80px)`;
  });

  requestAnimationFrame(girarRoda);
}

girarRoda();