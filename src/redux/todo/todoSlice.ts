import { createSlice } from "@reduxjs/toolkit"
import { FetchState, TodoState, TodoType } from "./types"
import { RootState } from "../rootReducer"
import { errorReducers } from "./errorReducers"
import {
  fetchTodos,
  createTodo,
  deleteTodo,
  editTodoText,
  completeTodo,
  incompleteTodo,
} from "./thunks"
import { updateTodoInState } from "./actions/updateTodoAction"

const initialState: TodoState = {
  todos: [],
  fetchState: FetchState.None,
}

export const todoSlice = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Error reducers
    Object.keys(errorReducers).forEach((actionType) => {
      builder.addCase(actionType, errorReducers[actionType])
    })

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

    //EDIT TODO TEXT
    builder.addCase(editTodoText.fulfilled, (state, { payload }) => {
      updateTodoInState(state, payload.changedTodo)
    })

    //COMPLETE TODO
    builder.addCase(completeTodo.fulfilled, (state, { payload }) => {
      updateTodoInState(state, payload.changedTodo)
    })

    //INCOMPLETE TODO
    builder.addCase(incompleteTodo.fulfilled, (state, { payload }) => {
      updateTodoInState(state, payload.changedTodo)
    })
  },
})

export const todoSliceActions = todoSlice.actions

export const selectTodoReducer = (state: RootState) => state.todoReducer

export const selectCompletedTodosLength = (state: RootState) =>
  state.todoReducer.todos.filter((todo: TodoType) => todo.completed).length
