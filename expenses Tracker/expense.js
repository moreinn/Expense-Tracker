
const amountInput = document.getElementById("amountId");
const descInput = document.getElementById("descripId");
const addBtn = document.getElementById("submit");
const list = document.getElementById("listEx");
const totalEl = document.getElementById("totalAmount");

let expenses = [];
let editIndex = null;

addBtn.addEventListener("click", () => {
    const amount = Number(amountInput.value);
    const description = descInput.value.trim();

    if (amount <= 0 || description === "") return;

    
    if (editIndex !== null) {
        expenses[editIndex] = { amount, description };
        editIndex = null;
        addBtn.innerText = "Add";
    } 
  
    else {
        expenses.push({ amount, description });
    }

    saveExpenses();
    renderExpenses();

    amountInput.value = "";
    descInput.value = "";
});

function renderExpenses() {
    list.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.classList.add("expense-item");

        const text = document.createElement("span");
        text.innerText = `${expense.description} - ₹${expense.amount}`;

        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        editBtn.classList.add("edit");

        editBtn.addEventListener("click", () => {
            amountInput.value = expense.amount;
            descInput.value = expense.description;
            editIndex = index;
            addBtn.innerText = "Update";
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", () => {
            expenses.splice(index, 1);
            saveExpenses();
            renderExpenses();
        });

        li.appendChild(text);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    expenses.forEach(exp => total += exp.amount);
    totalEl.innerText = `Total: ₹${total}`;
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
    const saved = localStorage.getItem("expenses");
    if (saved) {
        expenses = JSON.parse(saved);
        renderExpenses();
    }
}

loadExpenses();
