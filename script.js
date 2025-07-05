// alterna música ao clicar no cachorro
function alternarMusica() {
  const musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

// botão de voltar
function voltarPagina() {
  window.history.back();
}

// espera o DOM carregar antes de adicionar eventos
document.addEventListener("DOMContentLoaded", function () {
  const somselect = document.getElementById("som-select"); // som ao clicar
  const sommenu = document.getElementById("som-menu");     // som no menu
  const botaoVoltar = document.getElementById("botao-voltar"); 
  const opcoes = document.querySelectorAll('.opcao');
  
// sons
  opcoes.forEach(opcao => {
    opcao.addEventListener('mouseover', () => {
      sommenu.currentTime = 0;
      sommenu.play();
    });
    opcao.addEventListener('click', () => {
      somselect.currentTime = 0;
      somselect.play();
    });
  });

// botão RETORNAR
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function (e) {
      e.preventDefault();
      somselect.currentTime = 0;
      somselect.play();

      somselect.onended = () => {
        window.history.back();
      };
    });
  }

  // espera o som terminar antes de mudar de página
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (somselect && href && href !== "#") {
        e.preventDefault();
        somselect.currentTime = 0;
        somselect.play();
        somselect.onended = () => {
          window.location.href = href;
        };
      }
    });
  });
});
