const tasksList = document.querySelector("#tasks-list");
const addNewInput = document.querySelector("#new-task");
const addNewBtn = document.querySelector("#add-new");

tasksList.addEventListener("click",(e) => {
    if(e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
    }
    e.stopPropagation();
})

addNewBtn.addEventListener("click", () => {
    const task = addNewInput.value.trim();
    if(task.trim()) {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-button">Видалити</button>`;
        tasksList.appendChild(li);
    }

    addNewInput.value = "";
})

