const form = document.querySelector('form');
const mainInput = document.querySelector('input');
const mainUl = document.querySelector('ul');


const createLi = (ItemId) => {
    let li = document.createElement('li')
    li.classList.add('todo-item');
    li.dataset.id = ItemId;
    return li;
}

const createBtnDel = () => {
    let btn = document.createElement('button')
    btn.classList.add('todo-item__delete')
    btn.textContent = 'Delete'
    return btn;
}

const createSpan = (text) => {
    let span = document.createElement('span')
    span.classList.add('todo-item__description')
    span.textContent = text;
    return span;
}

const createInput = () =>{
    let input = document.createElement('input')
    input.type = 'checkbox'
    return input;
}

function renderTodo(item) {
    let li = createLi(item.id)
    let input = createInput(item.checked)
    let btn = createBtnDel()
    let span = createSpan(item.todo)
    li.append(input, span, btn)
    mainUl.appendChild(li)
    input.checked = item.checked
    if(item.checked){
        const li = input.parentElement
        li.classList.add('todo-item--checked')
    }
    mainInput.value = ''
}

async function sendTodo(e) {
    e.preventDefault();
    await sendTodoToServer(e)
}

async function deleteTodo(e) {
    if(e.target.classList.contains('todo-item__delete')) {
        const li = e.target.closest('li')
        const itemId = Number(li.dataset.id)
        try {
            await fetch(`http://localhost:3000/todo/${itemId}`, {
                method: 'DELETE',
            })
            li.remove()
        }catch (error) {
            console.log(error)
        }
    }
}

async function checkTodo(e){
    if(e.target.type === 'checkbox'){
        const input = e.target
        const li = e.target.closest('li')
        const newStatus = input.checked? 1 : 0
        const itemId = li.dataset.id
        try {
            await fetch(`http://localhost:3000/todo/${itemId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ checked: newStatus })
            })
        }catch (error) {
            console.log(error)
        }
    }
}

function getTodos(newList){
    newList.forEach(item => renderTodo(item));
}
async function getTodoFServer() {
    try{
        const response = await fetch('http://localhost:3000/todo')
        const data = await response.json()
        getTodos(data)
    }catch(err){
        console.log(err)
    }
}

async function sendTodoToServer() {
    const data = new FormData(form)
    await fetch('http://localhost:3000/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: Date.now(),
            todo: data.get('value'),
            checked: 0
        }),
    })
    mainUl.innerHTML = ''
    await getTodoFServer();
}

form.addEventListener('submit', sendTodo)
mainUl.addEventListener('click', deleteTodo)
mainUl.addEventListener('change', checkTodo)
document.addEventListener('DOMContentLoaded', getTodoFServer)