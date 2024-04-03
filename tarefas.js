function adicionarTarefa() {
    let novaTarefa = prompt("Digite a nova tarefa:");

    if (novaTarefa) {
        let novaTarefaElemento = document.createElement("li");
        novaTarefaElemento.textContent = novaTarefa;

        let listaTarefas = document.getElementById("lista-tarefas");
        listaTarefas.appendChild(novaTarefaElemento);
    }
}    