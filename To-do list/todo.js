
const inputUser = document.getElementById("todoInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");

let tasks = [];
let editIndex = null;

loadTasks();
loadTheme();

addTaskBtn.addEventListener("click", addOrUpdateTask);
themeBtn.addEventListener("click", toggleTheme);

function addOrUpdateTask() {
    const text = inputUser.value.trim();
    if (text === "") return;

   
    if (editIndex !== null) {
        tasks[editIndex].text = text;
        editIndex = null;
        addTaskBtn.innerText = "Add Task";
    }
   
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

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

    
        const span = document.createElement("span");
        span.innerText = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

      
        span.addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

      
        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            inputUser.value = task.text;
            editIndex = index;
            addTaskBtn.innerText = "Update Task";
        });

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


function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

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
