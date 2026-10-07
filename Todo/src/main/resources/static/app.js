const BASE_URL = 'http://localhost:8080/api';

// --- AUTHENTICATION PAGE LOGIC ---
const authForm = document.getElementById('auth-form');
if (authForm) {
    let isLoginMode = true;
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleLink = document.getElementById('toggle-link');

    // Toggle between login and registration layouts
    toggleLink.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        formTitle.innerText = isLoginMode ? 'Login to Todo App' : 'Register Account';
        submitBtn.innerText = isLoginMode ? 'Login' : 'Register';
        toggleLink.innerText = isLoginMode ? "Don't have an account? Register here." : "Already have an account? Login here.";
    });

    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const payload = { username, password };

        if (isLoginMode) {
            // Login Endpoint Call
            try {
                const response = await fetch(`${BASE_URL}/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const result = await response.text();

                if (result === "Login successful!") {
                    alert("Welcome back!");
                    window.location.href = 'todo.html'; // Direct to your items list
                } else {
                    alert(result); // Displays "Invalid username or password!"
                }
            } catch (err) {
                alert("Server Connection Failed!");
            }
        } else {
            // Register Endpoint Call
            try {
                const response = await fetch(`${BASE_URL}/users/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    alert("Registration successful! You can log in now.");
                    isLoginMode = true;
                    formTitle.innerText = 'Login to Todo App';
                    submitBtn.innerText = 'Login';
                } else {
                    alert("Registration failed.");
                }
            } catch (err) {
                alert("Server Connection Failed!");
            }
        }
    });
}

// --- DASHBOARD (TODO) LOGIC ---
const todoForm = document.getElementById('todo-form');
if (todoForm) {
    const todoListElement = document.getElementById('todo-list');
    const logoutBtn = document.getElementById('logout-btn');

    // Load tasks instantly when entering dashboard
    fetchTodos();

    todoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('todo-title').value;
        const description = document.getElementById('todo-desc').value;

        try {
            const response = await fetch(`${BASE_URL}/todos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description })
            });
            if (response.ok) {
                todoForm.reset();
                fetchTodos(); // Refresh list output
            }
        } catch (err) {
            console.error("Could not add todo item", err);
        }
    });

    async function fetchTodos() {
        try {
            const response = await fetch(`${BASE_URL}/todos`);
            const todos = await response.json();
            todoListElement.innerHTML = ''; // Wipe UI template clean first

            todos.forEach(todo => {
                const li = document.createElement('li');
                li.className = 'todo-item';
                li.innerHTML = `
                    <div class="todo-info">
                        <h4>${todo.title}</h4>
                        <p>${todo.description}</p>
                    </div>
                    <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
                `;
                todoListElement.appendChild(li);
            });
        } catch (err) {
            console.error("Could not fetch todos", err);
        }
    }

    // Expose delete action globally for button triggers
    window.deleteTodo = async function(id) {
        if(confirm("Delete this task?")) {
            try {
                await fetch(`${BASE_URL}/todos/${id}`, { method: 'DELETE' });
                fetchTodos(); // Re-render lists
            } catch (err) {
                console.error("Error deleting todo item", err);
            }
        }
    }

    logoutBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
