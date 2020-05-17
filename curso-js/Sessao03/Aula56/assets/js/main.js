const inputTask = document.querySelector('.input-new-task');
const btnTarefa = document.querySelector('.btn-add-task');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

// inputTarefa.addEventListener('keypress', function(e) {
//     if (e.keyCode === 13) {
//       if (!inputTarefa.value) return;
//       criaTarefa(inputTarefa.value);
//     }
//   });

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createEraselButton(li){
    li.innerText += ' ';
    const eraseButton = document.createElement('button');
    eraseButton.innerText = 'Apagar'
    eraseButton.setAttribute('class', 'erase');
    eraseButton.setAttribute('title','Apagar esta tarefa')
    li.appendChild(eraseButton);
}

function createTask(textInput) {
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    clearInput();
    createEraselButton(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTask.value) return
    createTask(inputTask.value);
});

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTask = tarefas.querySelector('li');
    const liOfTask = [];

    for (let task of liTask){
        let textTask = task.innerText;
        textTask = textTask.replace('apagar', '').trim();
        liOfTask.push(textTask);
    }    
    const jsonTask = JSON.stringify(liOfTask);
    localStorage.setItem('task',jsonTask);
    

    function addSavedTask(){
        const tasks = localStorage.getItem('task');
        const liOfTask = JSON.parse(task);

        for (let task of liOfTask);
            createTask(task);
    }
    
    addSavedTask();

}