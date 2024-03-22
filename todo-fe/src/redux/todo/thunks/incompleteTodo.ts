import { createAsyncThunk } from "@reduxjs/toolkit"
import { SuccessUpdateTodo } from "../types"
import axios from "axios"
import todoApi from "../../../config/axiosConfig"

interface Payload {
  id: string
}

export const incompleteTodo = createAsyncThunk<
  SuccessUpdateTodo,
  Payload,
  {
    rejectValue: any
  }
>("todoReducer/incompleteTodo", async (payload, { rejectWithValue }) => {
  try {
    const response = await todoApi.post(`/tasks/${payload.id}/incomplete`, {
      params: payload,
    })

    return {
      changedTodo: response.data,
    }
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error
    return rejectWithValue(errorData)
  }
})
