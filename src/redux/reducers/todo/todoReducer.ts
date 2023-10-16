import { createSlice } from "@reduxjs/toolkit"
import { FetchState, TodoState } from "./types"
import { fetchTodos } from "./actions/fetchTodos"
import { RootState } from "../../rootReducer"
import { createTodo } from "./actions/createTodo"
import { completeTodo } from "./actions/completeTodo"
import { incompleteTodo } from "./actions/incompleteTodo"
import { deleteTodo } from "./actions/deleteTodo"

const initialState: TodoState = {
  todos: [],
  fetchState: FetchState.None,
}

export const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //FETCH TODOS LOADING
    builder.addCase(fetchTodos.pending, (state) => {
      state.fetchState = FetchState.Loading
    })

    //FETCH TODOS LOADED
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      const { data } = payload
      state.fetchState = FetchState.Loaded
      state.todos = data
    })

    //ADD TODO
    builder.addCase(createTodo.fulfilled, (state, { payload }) => {
      const { newTodo } = payload
      state.todos.push(newTodo)
    })

    //DELETE TODO
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      const { id } = payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
    })

    //COMPLETE TODO
    builder.addCase(
      completeTodo.fulfilled || incompleteTodo.fulfilled,
      (state, { payload }) => {
        const { changedTodo } = payload

        const todoIndex = state.todos.findIndex(
          (todo) => todo.id === changedTodo.id
        )

        if (todoIndex !== -1) {
          state.todos[todoIndex] = changedTodo
        }
      }
    )
  },
})

export const todoSliceActions = todoSlice.actions

export const selectTodoReducer = (state: RootState) => state.todoReducer

export const selectCompletedTodosLength = (state: RootState) =>
  state.todoReducer.todos.filter((todo) => todo.completed).length
