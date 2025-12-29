
const input = document.getElementById("todoInput");
const btn = document.getElementById("addTask")
const list = document.getElementById("taskList");

let editLi = null;

btn.addEventListener("click", () => {
    const text = input.value.trim();
    if(text === ""){
        alert("Please enter Your task")
          return; 
    }
    if(editLi){
        editLi.innerText = text;
        editLi = null;
      btn.innerText = "Add Task"
    }

    //ADD MODE
    else{
        const li = document.createElement("li");
        li.innerText = text;
    

    //EDIT
    li.addEventListener("dblclick", () => {
        input.value = li.innerText;
        editLi = li;
       btn.innerText = "Update Task"
    })

    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        li.remove()
    });

    list.appendChild(li)
}
input.value = "";
}); 