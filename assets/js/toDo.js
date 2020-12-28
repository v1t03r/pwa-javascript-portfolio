const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createRemoveBtn(li) {
    li.innerText += ' ';
    const RemoveBtn = document.createElement('button');
    RemoveBtn.innerText = 'Remove';
    // botaoApagar.classList.add('apagar');
    RemoveBtn.setAttribute('class', 'Remove btn btn-light');
    RemoveBtn.setAttribute('title', 'Remove this task');
    li.appendChild(RemoveBtn);
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    li.setAttribute('class', 'li-todo list-group-item list-group-item-light')
    tasks.appendChild(li);
    clearInput();
    createRemoveBtn(li);
    saveTasks();
}

btnTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('Remove')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Remove', '').trim();
        tasksList.push(textTask);
    }

    const tasksJSON = JSON.stringify(tasksList);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksList = JSON.parse(tasks);

    for (let task of tasksList) {
        createTask(task);
    }
}
addSavedTasks();
