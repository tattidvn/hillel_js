import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addTodo, changeTodo, delTodo} from "./reducer/todoSlice.js";

function App() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.elements.newTodo.value
        dispatch(addTodo(value));
        e.target.reset()
    }

    const handleBtnDelete = (id) => {
        dispatch(delTodo(id))
    }

    const handleChange = (id) => {
        dispatch(changeTodo(id));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={'newTodo'}/>
                <button type={"submit"}>add</button>
            </form>
            <div>
                {todos.map((todo) =>
                    <ul style={{display: 'flex', gap: '1em'}} key={todo.id}>
                        <input type={"checkbox"} checked={todo.check} onChange={() => handleChange(todo.id)}></input>
                        <span>{todo.text}</span>
                        <button onClick={() => handleBtnDelete(todo.id)}>del</button>
                    </ul>
                )}
            </div>
        </>
    )
}

export default App
