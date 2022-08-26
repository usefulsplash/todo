let newTodo = document.querySelector("#newTodo");
let addToDo = document.querySelector("#addTodo");
let toDoList = document.querySelector("#toDoList");

addToDo.onclick = () => {
  let item = document.createElement("li");
  item.textContent = newTodo.value;
  toDoList.appendChild(item);
  newTodo.value = null;
};
