//Selectors
let todoInput = document.querySelector(".todo-input")
let todoButton = document.querySelector(".todo-button")
let todoList = document.querySelector(".todo-list")
let filterOption = document.querySelector(".filter-todo")
//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)
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
    //Add todo to localstorage
    saveLocalTodos(todoInput.value)
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
function deleteCheck(e) {
    let item = e.target
    //Delete Todo
    if (item.classList[0] === 'trash-btn') {
        let todo = item.parentElement
        //Animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }
    //Check Mark 
    if (item.classList[0] === 'complete-btn') {
        let todo = item.parentElement
        todo.classList.toggle("completed")
    }
}
function filterTodo(e) {
    let todos = todoList.childNodes
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break
        }
    })
}
function saveLocalTodos(todo) {
    let todos
    if (localStorage.getItem('todos' === null)) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}
function getTodos() {
    let todos
    if (localStorage.getItem('todos' === null)) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach((todo) => {
        //todo div
        let todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //create li
        let newTodo = document.createElement('li')
        newTodo.innerText = todo;
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
    })
}