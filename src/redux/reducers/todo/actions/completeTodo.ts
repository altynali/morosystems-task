import { createAsyncThunk } from "@reduxjs/toolkit"
import { TodoType } from "../types"
import todoApi from "../../../../config/axiosConfig"
import axios from "axios"

interface Payload {
  id: string
}

interface Success {
  changedTodo: TodoType
}

export const completeTodo = createAsyncThunk<
  Success,
  Payload,
  {
    rejectValue: any
  }
>("todoReducer/completeTodo", async (payload, { rejectWithValue }) => {
  try {
    const response = await todoApi.post(`/tasks/${payload.id}/complete`, {
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
