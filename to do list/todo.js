const form = document.querySelector("form");
const input = document.querySelector("#txtTask");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");


eventListeners();

function eventListeners(){
    form.addEventListener("submit", addNewItem)
   
}

function addNewItem(e){
if(input.value ===''){
    alert("add new item");
    console.log("submit");
}

    

    e.preventDefault();
}


