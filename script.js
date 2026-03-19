const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const descansoCurtoBt = document.querySelector(".app__card-button--curto");
const descansoLongoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const textoPrincipal = document.querySelector(".app__title");

focoBt.addEventListener("click", () => {
  mudarContexto("foco");
});

descansoCurtoBt.addEventListener("click", () => {
  mudarContexto("descanso-curto");
});

descansoLongoBt.addEventListener("click", () => {
  mudarContexto("descanso-longo");
});

function mudarContexto(contexto) {
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
