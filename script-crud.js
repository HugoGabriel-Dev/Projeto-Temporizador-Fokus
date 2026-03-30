// Adicionando nova tarefa e abrindo form
const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const btnAdicionarform = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");
  li.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
  `;

  const p = document.createElement("p");
  p.classList.add("app__section-task-list-item-description");
  p.textContent = tarefa.descricao;

  const button = document.createElement("button");
  const img = document.createElement("img");
  button.classList.add("app_button-edit");
  img.setAttribute("src", "/imagens/edit.png");
  button.append(img);

  li.append(p);
  li.append(button);

  return li;
}

btnAdicionarTarefa.addEventListener("click", () => {
  btnAdicionarform.classList.toggle("hidden");
});

btnAdicionarform.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: textArea.value,
  };
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
});

tarefas.forEach((tarefa) => {
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
});
