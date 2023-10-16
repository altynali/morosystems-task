import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { deleteTodo } from "./deleteTodo"
import { TodoType } from "../types"

interface Payload {
  todos: TodoType[]
}

export const deleteAllCompletedTodos = createAsyncThunk<
  void,
  Payload,
  {
    rejectValue: any
  }
>(
  "todoReducer/deleteAllCompletedTodos",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const todos = payload.todos

      await Promise.all(
        todos.map(async (todo) => {
          if (todo.completed) {
            await dispatch(deleteTodo({ id: todo.id }))
          }
        })
      )
    } catch (error) {
      const errorData = axios.isAxiosError(error) ? error.response?.data : error
      return rejectWithValue(errorData)
    }
  }
)
