let input = document.getElementById("input");
let but = document.getElementById("but");
let list = document.getElementById("list");

but.addEventListener("click", addtodo);
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addtodo();
  }
});

function addtodo() {
  const todoText = input.value.trim();
  if (todoText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${todoText}</span>
    <div id = "change">
      <button id = "update-btn">Update</button>
      <button id = "delete-btn">Delete</button>
    </div>
    `;
    list.appendChild(li);
    input.value = "";

    let updatebtn = li.querySelector("#update-btn");
    let deletebtn = li.querySelector("#delete-btn");

    updatebtn.addEventListener("click", function () {
      updateTodoItem(li);
    });

    deletebtn.addEventListener("click", function () {
      deleteTodoItem(li);
    });
  }
}

function deleteTodoItem(todoItem) {
  list.removeChild(todoItem);
}

function updateTodoItem(todoItem) {
  let todoTextContent = document.querySelector("span");
  let newTodoText = prompt("Update your todo:", todoTextContent.textContent);
  if (newTodoText !== null && newTodoText.trim() !== "") {
    todoTextContent.textContent = newTodoText.trim();
  }
}
