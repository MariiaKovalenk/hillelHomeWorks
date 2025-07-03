document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('new-task');
    const addBtn = document.getElementById('add-btn');
    const modalElement = document.getElementById('taskModal');
    const modalBodyText = document.getElementById('modal-body-text');

    let modal;

    addBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.className = 'list-group-item list-group-item-action';
            li.textContent = taskText;
            li.dataset.task = taskText;

            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.tagName === 'LI') {
            modalBodyText.textContent = target.dataset.task;
            if (!modal) {
                modal = new bootstrap.Modal(modalElement);
            }
            modal.show();
        }
    });
});
