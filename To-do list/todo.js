/* =========================
   ELEMENTS
========================= */
const inputUser = document.getElementById("todoInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");

/* =========================
   DATA
========================= */
let tasks = [];
let editIndex = null;

/* =========================
   INITIAL LOAD
========================= */
loadTasks();
loadTheme();

/* =========================
   EVENTS
========================= */
addTaskBtn.addEventListener("click", addOrUpdateTask);
themeBtn.addEventListener("click", toggleTheme);

/* =========================
   ADD / UPDATE TASK
========================= */
function addOrUpdateTask() {
    const text = inputUser.value.trim();
    if (text === "") return;

    // EDIT MODE
    if (editIndex !== null) {
        tasks[editIndex].text = text;
        editIndex = null;
        addTaskBtn.innerText = "Add Task";
    }
    // ADD MODE
    else {
        tasks.push({
            text: text,
            completed: false
        });
    }
///////////////////////////////////////////////////////////////////////////////////////
    inputUser.value = "";
    saveTasks();
    renderTasks();
}

/* =========================
   RENDER TASKS
========================= */
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");
        span.innerText = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        // Toggle complete
        span.addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            inputUser.value = task.text;
            editIndex = index;
            addTaskBtn.innerText = "Update Task";
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTask(index);
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

/* =========================
   DELETE TASK
========================= */
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

/* =========================
   LOCAL STORAGE
========================= */
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
        renderTasks();
    }
}

/* =========================
   DARK MODE
========================= */
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.innerText = "☀️ Light Mode";
    }
}
