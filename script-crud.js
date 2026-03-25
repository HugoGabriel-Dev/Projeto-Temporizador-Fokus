// Adicionando nova tarefa e abrindo form
const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const btnAdicionarform = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");

const tarefas = []

btnAdicionarTarefa.addEventListener("click", () => {
  btnAdicionarform.classList.toggle("hidden");
});

btnAdicionarform.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefa', JSON.stringify(tarefas) )
});
