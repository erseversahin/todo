const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;

loadItems();
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addNewItem);
  taskList.addEventListener("click", deleteItem);
  btnDeleteAll.addEventListener("click", deleteAllItems);
}
function loadItems() {
  todos = getItemsFromLS();
  todos.forEach(function (item) {
    if (item) creatItem(item);
  });
}
function getItemsFromLS() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
function setItemToLS(newTodo) {
  todos = getItemsFromLS();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function creatItem(text) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';
  li.appendChild(a);
  taskList.appendChild(li);
}
function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
    //console.log("submit");
  }

  creatItem(input.value);

  /* ADD LOCALSTORAGE */
  setItemToLS(input.value);

  input.value = "";

  e.preventDefault();
}
setItemToLS(input.value);
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Silme istediğinize emin misiniz?")) {
      e.target.parentElement.parentElement.remove();
      deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
  }
  e.preventDefault();
}
function deleteTodoFromStorage(deletetodo) {
  let todos = getItemsFromLS();
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteAllItems(e) {
  if (confirm("tüm elemanları silmek istediğinize emin misiniz?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }
}

/* 
Project Issues
1. Boşluk bırakıldığında uyarı verilecek.
2. Aynı eleman eklenmeye çalışıldığında uyarı verilecek.
--- 

Araştırmanı ve Öğrenmeni Beklediğim Konular

1. REST API Nedir?
2. JSON Nedir?

https://jsonplaceholder.typicode.com/
Bu bir fake rest api. Buradan aşağıda belirttiğim konuları öğrenirken faydalanabilirsin.

3. Async ve Await
Burada öğrenmeni beklediğim konular şunlar: Async ve Await kullanarak asenkron işlemleri yönetmeyi öğrenmen.
    - Promise
    - Callback
    - Async
    - Await

4. HTTP İstekleri
Burada öğrenmeni beklediğim konular şunlar: Axios ve FetchAPI kullanarak HTTP istekleri yapmayı öğrenmen.
    - GET, POST, PUT, DELETE
    - HTTP Status Codes
    - HTTP Headers
    - HTTP Request 
    - HTTP Response 


*/
