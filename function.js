//Selectors
const todoInput = document.querySelector("#todo-text");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
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
  //adds todo item to local storage
  saveLocalTodos(todoInput.value);
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
    removeLocalTodos(todo);
    todo.remove();
  }
  if (item.classList[0] === "done-btn") {
    todo.classList.toggle("done");
  }
}

function saveLocalTodos(todo) {
  //checks if there are already todo items in local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    //if there aren't, a new "todos" array is instantiated
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // if there are, they're parsed into "todos"
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //creates div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creates list item
    const newItem = document.createElement("li");
    newItem.textContent = todo;
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
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
