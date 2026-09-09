const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

let todoList = []

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/todo', (req, res) => {
    res.send(todoList)
})

app.post('/todo', (req, res) => {
    const newTodo = {...req.body}
    todoList.push(req.body)
    res.send(newTodo)
})

app.delete('/todo/:id', (req, res) => {
    const id = +req.params.id
    todoList = todoList.filter(todo => todo.id !== id)
    res.send(todoList)
})


app.put('/todo/:id', (req, res) => {
    const id = +req.params.id;
    const newTodo = req.body;
    todoList = todoList.map(item => {
        if (item.id === id) {
            return { ...item, ...newTodo };
        }
        return item;
    });
    res.json({ success: true, updatedId: id });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})