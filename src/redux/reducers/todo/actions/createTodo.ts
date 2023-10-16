import { createAsyncThunk } from "@reduxjs/toolkit"
import { TodoType } from "../types"
import todoApi from "../../../../config/axiosConfig"
import axios from "axios"

interface Payload {
  text: string
}

interface Success {
  newTodo: TodoType
}

export const createTodo = createAsyncThunk<
  Success,
  Payload,
  {
    rejectValue: any
  }
>("todoReducer/createTodo", async (payload, { rejectWithValue }) => {
  try {
    const response = await todoApi.post("/tasks", payload)

    return {
      newTodo: response.data,
    }
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error
    return rejectWithValue(errorData)
  }
})
