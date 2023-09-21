// ****** SELECT ITEMS **********
let alert = document.querySelector('.alert')
let form = document.querySelector('.grocery-form')
let grocery = document.getElementById('grocery')
let submitBtn = document.querySelector('.submit-btn')
let container = document.querySelector('.grocery-container')
let list = document.querySelector('.grocery-list')
let clearBtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
//clear items
clearBtn.addEventListener('click', clearItems)
//load items
window.addEventListener('DOMContentLoaded', setupItems)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    let value = grocery.value
    let id = new Date().getTime().toString()
    if (value && !editFlag) {
        createListItem(id, value)
        //display alert
        displayAlert('item added to the list', 'success')
        //show container
        container.classList.add('show-container')
        //add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault()
    }
    else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert("value changed", "success")
        //edit local storage
        editLocalStorage(editID, value)
        setBackToDefault()
    }
    else {
        displayAlert("please enter value", "danger")
    }
}
//display alert
function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    //remove alert
    setTimeout(() => {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}
//clear items
function clearItems() {
    let items = document.querySelectorAll('.grocery-item')
    if (items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert("empty list", "danger")
    setBackToDefault();
    localStorage.removeItem("list")
}
//delete function
function deleteItem(e) {
    let element = e.currentTarget.parentElement.parentElement
    let id = element.dataset.id
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-container")
    }
    displayAlert("item removed", "danger")
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id)
}
//edit function
function editItem(e) {
    let element = e.currentTarget.parentElement.parentElement
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = "edit";
}
//set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    let grocery = { id, value }
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filte((item) => {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function editLocalStorage(id, value) {
    let items = getLocalStorage()
    items = items.map((item) => {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}
//localStorage API
//setItem
//getItem
//removeItem
//save as string
// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach((item) => {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}
function createListItem(id, value) {
    let element = document.createElement('article')
    //add class
    element.classList.add('grocery-item')
    //add id
    let attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
          <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`
    let deleteBtn = element.querySelector(".delete-btn")
    let editBtn = element.querySelector(".edit-btn")
    deleteBtn.addEventListener("click", deleteItem)
    editBtn.addEventListener("click", editItem)
    //append child
    list.appendChild(element)
}