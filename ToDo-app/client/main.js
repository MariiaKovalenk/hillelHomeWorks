const API_URL = 'http://localhost:3000/todos';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

async function fetchTodos() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            console.error('Failed to fetch todos');
            return;
        }
        const todos = await res.json();
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.onclick = () => deleteTodo(todo._id);

            const toggleBtn = document.createElement('button');
            toggleBtn.textContent = todo.completed ? 'Undo' : 'Complete';
            toggleBtn.onclick = () => toggleTodo(todo);

            li.appendChild(toggleBtn);
            li.appendChild(delBtn);

            todoList.appendChild(li);
        });
    } catch (err) {
        console.error('Error loading todos:', err);
        alert('Error loading todos');
    }
}

async function addTodo(title) {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title }),
        });
        if (!res.ok) {
            console.error('Failed to add todo');
            return;
        }
        await fetchTodos();
    } catch (err) {
        console.error('Error adding todo:', err);
        alert('Error adding todo');
    }
}

async function deleteTodo(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!res.ok) {
            console.error('Failed to delete todo');
            return;
        }
        await fetchTodos();
    } catch (err) {
        console.error('Error deleting todo:', err);
        alert('Error deleting todo');
    }
}

async function toggleTodo(todo) {
    try {
        const res = await fetch(`${API_URL}/${todo._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !todo.completed }),
        });
        if (!res.ok) {
            console.error('Failed to update todo');
            return;
        }
        await fetchTodos();
    } catch (err) {
        console.error('Error updating todo:', err);
        alert('Error updating todo');
    }
}

todoForm.onsubmit = async (e) => {
    e.preventDefault();
    const title = todoInput.value.trim();
    if (!title) return;
    await addTodo(title);
    todoInput.value = '';
};

await fetchTodos();
