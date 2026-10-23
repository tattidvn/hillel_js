import {createSlice} from "@reduxjs/toolkit";

export const initialState = []
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                check: false
            })
        },

        delTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },

        changeTodo: (state, action) => {
            state.forEach((todo) => {
                if (todo.id === action.payload){
                    todo.check = !todo.check
                }
            })
        }

    }
})

export const {addTodo, delTodo, changeTodo} = todoSlice.actions;
export default todoSlice.reducer