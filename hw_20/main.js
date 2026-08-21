const $addTodoBtn = $('.form__btn')
const $addTodoInput = $('.form__input')
const $tasksListContainer = $('.js--todos-wrapper')

let todos = JSON.parse(localStorage.getItem('todosList')) || []


const createLi = () => {
    return $('<li>')
        .addClass('todo-item')
}
const createTodo = (text) => {
    return $('<span>')
        .addClass('todo-item__description')
        .text(text)
}

const createBtnDel = () => {
    return $('<button>')
        .addClass('todo-item__delete')
        .text('Видалити')
}


const createBtnLook = () => {
    return $('<button>')
        .attr({
            type: 'button',
            'data-bs-toggle': 'modal',
            'data-bs-target': '#exampleModal'
        })
        .addClass('btn btn-primary todo-item__look')
        .text('Подивитись')
}


const createCheckbox = () => {
    return $('<input>')
        .attr('type', 'checkbox')
}


const renderTodo = (itemTodo) => {
    const $li = createLi()
    const $span = createTodo(itemTodo.text)
    const $checkbox = createCheckbox()
    const $button = createBtnDel()
    const $buttonLook = createBtnLook()
    $checkbox.prop('checked', itemTodo.status)
    if (itemTodo.status) {
        $span.addClass('todo-item--checked')
    }
    $li.attr('data-id', itemTodo.id)
    $li.append(
        $checkbox,
        $span,
        $buttonLook,
        $button
    )
    $tasksListContainer.append($li)
}


const addNewTodo = (e) => {
    e.preventDefault()
    const todoText = $addTodoInput.val()
    const todo = {
        id: Date.now(),
        text: todoText,
        status: false
    }

    todos.push(todo)
    renderTodo(todo)
    localStorage.setItem('todosList', JSON.stringify(todos))
    $addTodoInput.val('')
}


const lookTodoBtn = (e) => {
    const $button = $(e.target)
    if ($button.hasClass('todo-item__look')) {
        const $li = $button.closest('li')
        const todoText = $li.find('span').text()
        $('.textInModal').text(todoText)
    }
}


const delTodoBtn = (e) => {
    const $delBtn = $(e.target)
    if ($delBtn.hasClass('todo-item__delete')) {
        const $li = $delBtn.closest('li')
        const todoId = Number($li.attr('data-id'))
        todos = todos.filter((item) => item.id !== todoId)
        $li.remove()
        localStorage.setItem('todosList', JSON.stringify(todos))
    }
}


const changeStatus = (e) => {
    if (e.target.type === 'checkbox') {
        const $checkbox = $(e.target)
        const $li = $checkbox.closest('li')
        const todoId = Number($li.attr('data-id'))
        const $todoText = $li.find('span')
        $todoText.toggleClass(
            'todo-item--checked',
            $checkbox.prop('checked')
        )
        const todo = todos.find((item) => item.id === todoId)
        todo.status = $checkbox.prop('checked')
        localStorage.setItem(
            'todosList',
            JSON.stringify(todos)
        )
    }
}


todos.forEach((item) => {
    renderTodo(item)
})


$addTodoBtn.on('click', addNewTodo)

$tasksListContainer.on('click', '.todo-item__delete', delTodoBtn)

$tasksListContainer.on('click', '.todo-item__look', lookTodoBtn)

$tasksListContainer.on('change', 'input[type="checkbox"]', changeStatus)