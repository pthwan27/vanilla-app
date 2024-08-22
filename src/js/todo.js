const toDoForm = document.querySelector("#todo_form");
const toDoList = document.querySelector("#todo_list");

const TODO_KEY = "todos";

let toDos = [];
const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos) {
  toDos = JSON.parse(savedTodos);

  toDos.forEach(paintTodo);
}

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;

  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));

  saveTodos();
  li.remove();
}

function paintTodo(newTodo) {
  const toDoListItem = document.createElement("li");
  toDoListItem.classList.add("todo_list_li");
  toDoListItem.id = newTodo.id;

  const toDoListItemText = document.createElement("span");
  toDoListItemText.innerText = newTodo.value;

  const toDoListItemDeleteButton = document.createElement("button");
  toDoListItemDeleteButton.innerText = "❌";

  toDoListItemDeleteButton.addEventListener("click", deleteTodo);

  toDoListItem.appendChild(toDoListItemText);
  toDoListItem.appendChild(toDoListItemDeleteButton);
  toDoList.appendChild(toDoListItem);
}

function toDoSubmit(e) {
  e.preventDefault();

  const toDoInput = toDoForm.firstElementChild;

  const inputValue = toDoInput.value.trim();

  if (inputValue === "") return;

  const toDoItem = { id: Date.now(), value: inputValue };

  toDos.push(toDoItem);

  paintTodo(toDoItem);
  saveTodos();

  toDoInput.value = "";
}

toDoForm.addEventListener("submit", toDoSubmit);
