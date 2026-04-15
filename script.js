const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const descansoCurtoBt = document.querySelector(".app__card-button--curto");
const descansoLongoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const textoPrincipal = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button ");
const temporizadorBt = document.querySelector("#start-pause");
const input = document.querySelector("#alternar-musica");
const textBtStartPause = document.querySelector("#start-pause span");
const imagemPause = document.querySelector(".app__card-primary-butto-icon");
const timer = document.querySelector('#timer')

const musica = new Audio("/sons/luna-rise-part-one.mp3");
const pauseTemporizador = new Audio("/sons/pause.mp3");
const playTemporizador = new Audio("/sons/play.wav");
const fimTemporizador = new Audio("/sons/beep.mp3");
musica.loop = true;

let contagemRegressiva = 15 ;
let interval = null;

input.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  contagemRegressiva = 15
  mudarContexto("foco");
  focoBt.classList.add("active");
});

descansoCurtoBt.addEventListener("click", () => {
  contagemRegressiva = 300
  mudarContexto("descanso-curto");
  descansoCurtoBt.classList.add("active");
});

descansoLongoBt.addEventListener("click", () => {
    contagemRegressiva = 900
  mudarContexto("descanso-longo");
  descansoLongoBt.classList.add("active");
});

function mudarContexto(contexto) {
  mostrarTempo()
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);

  switch (contexto) {
    case "foco":
      textoPrincipal.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
      break;
    case "descanso-curto":
      textoPrincipal.innerHTML = `
      Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta! </strong>
    `;
      break;
    case "descanso-longo":
      textoPrincipal.innerHTML = `
      Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>
    `;
      break;
    default:
      break;
  }
}

const temporizador = () => {
  if (contagemRegressiva <= 0) {
    fimTemporizador.play();
    alert("temporizador finalizado");
    const focoAtivo = html.getAttribute('data-contexto') == 'foco'
      if (focoAtivo) {
        const novoEvento = new CustomEvent('focoFinalizado')
        document.dispatchEvent(novoEvento)
      }
    zerar();
    return;
  }
  contagemRegressiva -= 1;
  mostrarTempo()
};

temporizadorBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (interval) {
    textBtStartPause.textContent = `
      Começar
    `;
    imagemPause.setAttribute("src", "/imagens/play_arrow.png");
    pauseTemporizador.play();
    zerar();
    return;
  } else {
    textBtStartPause.textContent = `
      Pausar
    `;
    imagemPause.setAttribute("src", "/imagens/pause.png");
    playTemporizador.play();
    interval = setInterval(temporizador, 1000);
  }
}

function zerar() {
  clearInterval(interval);
  interval = null;
}

function mostrarTempo (){
  const tempo = new Date(contagemRegressiva * 1000)
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
  timer.innerHTML = `
    ${tempoFormatado}
  `
}

mostrarTempo()