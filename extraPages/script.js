const input = document.getElementById("todoInput");
const btn = document.getElementById("addTask");
const list = document.getElementById("taskList");

let editLi = null;
let editLiSpan = null;

btn.addEventListener("click", () => {
    const text = input.value.trim();

    if(text === "") return;
     
    
    if(editLi !== null ){
        editLiSpan.innerText = input.value
        editLi = null;
        editLiSpan = null;
        btn.innerText = "ADD TASK";
        input.value = "";
         return;
    }

    // Creating List
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;

    li.addEventListener("dblclick", () => {
        input.value = span.innerText;
        editLi = li;
        editLiSpan = span;
        btn.innerText = "Update Task"

    })

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";

    delBtn.addEventListener("click", () => {
        li.remove()
    });

    li.appendChild(span);
    li.appendChild(delBtn)

    list.appendChild(li)

    input.value = "";

})