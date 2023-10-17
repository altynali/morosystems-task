import { createAsyncThunk } from "@reduxjs/toolkit"
import { SuccessUpdateTodo } from "../types"
import axios from "axios"
import todoApi from "../../../config/axiosConfig"

interface Payload {
  id: string
  newText: string
}

export const editTodoText = createAsyncThunk<
  SuccessUpdateTodo,
  Payload,
  {
    rejectValue: any
  }
>("todoReducer/editTodoText", async ({ id, newText }, { rejectWithValue }) => {
  try {
    const response = await todoApi.post(`/tasks/${id}`, {
      text: newText,
    })

    return {
      changedTodo: response.data,
    }
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error
    return rejectWithValue(errorData)
  }
})
