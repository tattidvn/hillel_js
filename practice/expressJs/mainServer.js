const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())

const port = 3000


let UsersDB = [{
    id: 1,
    name: "John Doe",
}
]

app.get('/', (req, res) => {
    res.send('hello ma Boy')
})

app.get('/usersList', (req, res) => {
    res.send(UsersDB)
})

app.post('/usersList', (req, res) => {
    const newUser = {...req.body}
    UsersDB.push(req.body)
    res.send(newUser)
})

app.delete('/usersList/:id', (req, res) => {
    const id = +req.params.id
    UsersDB = UsersDB.filter((user) => user.id !== id)
    res.send(UsersDB)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})