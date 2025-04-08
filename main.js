const tasksList = document.querySelector("#tasks-list");
const addNewInput = document.querySelector("#new-task");
const addNewBtn = document.querySelector("#add-new");

window.onload = function () {
    tasksList.innerHTML = "";
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        renderTask(task.text, task.completed);
    });
};

addNewBtn.addEventListener("click", () => {
    const task = addNewInput.value.trim();
    if (task) {
        renderTask(task, false);
        saveTasks();
        addNewInput.value = "";
    }
});

tasksList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
        saveTasks();
    }
});

tasksList.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const span = e.target.nextSibling;
        if (span) span.classList.toggle("completed", e.target.checked);
        saveTasks();
    }
});

function renderTask(text, completed) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    const span = document.createElement("span");
    span.textContent = text;
    if (completed) {
        span.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete-button");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    tasksList.appendChild(li);
}

function saveTasks() {
    const tasks = [];
    tasksList.querySelectorAll("li").forEach(li => {
        const checkbox = li.querySelector("input[type='checkbox']");
        const span = li.querySelector("span");
        tasks.push({
            text: span.textContent,
            completed: checkbox.checked
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
