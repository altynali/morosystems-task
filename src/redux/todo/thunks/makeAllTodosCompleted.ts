import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { TodoType } from "../types"
import { completeTodo } from "./completeTodo"

interface Payload {
  todos: TodoType[]
}

export const makeAllTodosCompleted = createAsyncThunk<
  void,
  Payload,
  {
    rejectValue: any
  }
>(
  "todoReducer/makeAllTodosCompleted",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const todos = payload.todos

      await Promise.all(
        todos.map(async (todo) => {
          if (!todo.completed) {
            await dispatch(completeTodo({ id: todo.id }))
          }
        })
      )
    } catch (error) {
      const errorData = axios.isAxiosError(error) ? error.response?.data : error
      return rejectWithValue(errorData)
    }
  }
)
