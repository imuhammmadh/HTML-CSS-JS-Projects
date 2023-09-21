// ****** SELECT ITEMS **********
let alert = document.querySelector('.alert')
let form = document.querySelector('.grocery-form')
let grocery = document.getElementById('grocery')
let submitBtn = document.querySelector('.submit-btn')
let container = document.querySelector('.grocery-container')
let list = document.querySelector('.grocey-list')
let clearBtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    let value = grocery.value
    let id = new Date().getTime().toString()
    if (value && !editFlag) {
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
        //append child
        list.appendChild(element)
        //display alert
        displayAlert('item added to the list', 'success')
        //show container
        container.classList.add('show-container')
    }
    else if (value && editFlag) { }
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
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
