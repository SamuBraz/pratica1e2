function adicionarTarefa() {
    let novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa) {
        let novaTarefaElemento = document.createElement("li");
        novaTarefaElemento.textContent = novaTarefa;

        let listaTarefas = document.getElementById("lista-tarefas");
        listaTarefas.appendChild(novaTarefaElemento);
    }
}    

function removerTarefa() {
    let indece = prompt("Digite o numero da lista que deseja apagar: ");
    indice = parseInt(indece);
    indice -=1;
    if(indece){
        let listaTarefas = document.getElementById("lista-tarefas");
        let elementoRemovido = listaTarefas.removeChild(listaTarefas.children[indice]);
  }
}  