//Selectors
const todoInput = document.querySelector("#todo-text");
const todoButton = document.querySelector("#todo-button");
const toDoList = document.querySelector("#todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(e) {
  //prevents form from submitting
  e.preventDefault();
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
  toDoList.appendChild(todoDiv);
  //clears input field
  todoInput.value = null;
}
