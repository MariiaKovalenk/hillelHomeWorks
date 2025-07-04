import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });
});
