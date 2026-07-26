const addTodoBtn = document.querySelector('.form__btn')
const addTodoInput = document.querySelector('.form__input')
const tasksListContainer = document.querySelector('.js--todos-wrapper')
let todos = JSON.parse(localStorage.getItem('todosList')) || []

const createLi = () => {
    const li = document.createElement('li')
    li.classList.add('todo-item')
    return li
}

const createTodo = (text) => {
    const span = document.createElement('span')
    span.classList.add('todo-item__description')
    span.textContent = text
    return span
}

const createBtnDel = () => {
    const button = document.createElement('button')
    button.classList.add('todo-item__delete')
    button.textContent = 'Видалити'
    return button
}

const createCheckbox = () => {
    const input = document.createElement('input')
    input.type = 'checkbox'
    return input
}

const renderTodo = (itemTodo) => {
    const li = createLi()
    const span = createTodo(itemTodo.text)
    const checkbox = createCheckbox()
    checkbox.checked = itemTodo.status
    if(checkbox.checked) {
        span.classList.add('todo-item--checked')
    }
    const button = createBtnDel()
    li.dataset.id = String(itemTodo.id)
    li.append(checkbox, span, button)
    tasksListContainer.append(li)
}

for (let item of todos) {
    renderTodo(item)
}

const addNewTodo = (e) => {
    e.preventDefault()
    const todoText = addTodoInput.value
    const todo = {
        id: Date.now(),
        text: todoText,
        status: false
    }
    todos.push(todo)
    renderTodo(todo)
    localStorage.setItem('todosList', JSON.stringify(todos))
    addTodoInput.value = ''
}


const delTodoBtn = (e) => {
    const delBtn = e.target
    if (delBtn.classList.contains('todo-item__delete')) {
        const li = delBtn.closest('li')
        const todoId = Number(li.dataset.id)
        todos = todos.filter((item) => item.id !== todoId)
        li.remove()
        localStorage.setItem('todosList', JSON.stringify(todos))
    }
}

const changeStatus = (e) => {
    if (e.target.type === 'checkbox') {
        const checkbox = e.target
        const li = checkbox.closest('li')
        const todoId = Number(li.dataset.id)
        const todoText = li.querySelector('span')
        todoText.classList.toggle('todo-item--checked')
        const todo = todos.find((item) => item.id === todoId)
        todo.status = checkbox.checked
        localStorage.setItem('todosList', JSON.stringify(todos))
    }
}

addTodoBtn.addEventListener('click', addNewTodo)
tasksListContainer.addEventListener('click', delTodoBtn)
tasksListContainer.addEventListener('change', changeStatus)