//Selectors
let todoInput = document.querySelector(".todo-input")
let todoButton = document.querySelector(".todo-button")
let todoList = document.querySelector(".todo-list")
//Event Listeners
todoButton.addEventListener('click', addTodo)
//Functions
function addTodo(event) {
    event.preventDefault()
    //todo div
    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    let newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    let completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //Check Trash Button
    let trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)
    //Append to list
    todoList.appendChild(todoDiv)
    //Clear todo input value
    todoInput.value = "";
}