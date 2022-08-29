//Selectors
const todoInput = document.querySelector("#todo-text");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", doneOrDelete);

//Functions
function addTodo(e) {
  //creates div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //creates list item
  const newItem = document.createElement("li");
  newItem.textContent = todoInput.value;
  newItem.classList.add("todo-item");
  todoDiv.append(newItem);
  //creates done button
  const doneButton = document.createElement("button");
  doneButton.innerHTML = "done";
  doneButton.classList.add("done-btn");
  todoDiv.appendChild(doneButton);
  //creates delete button
  const deleteButton = document.createElement("Button");
  deleteButton.innerHTML = "delete";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //appends whole div with children to todo list
  todoList.appendChild(todoDiv);
  //clears input field
  todoInput.value = null;
}

function doneOrDelete(e) {
  const item = e.target;
  const todo = item.parentElement;
  if (item.classList[0] === "delete-btn") {
    todo.remove();
  }
  if (item.classList[0] === "done-btn") {
    todo.classList.toggle("done");
  }
}
