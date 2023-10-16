import { createAsyncThunk } from "@reduxjs/toolkit"
import todoApi from "../../../../config/axiosConfig"
import axios from "axios"

interface Payload {
  id: string
}

interface Success {
  id: string
}

export const deleteTodo = createAsyncThunk<
  Success,
  Payload,
  {
    rejectValue: any
  }
>("todoReducer/deleteTodo", async (payload, { rejectWithValue }) => {
  try {
    await todoApi.delete(`/tasks/${payload.id}`)

    return {
      id: payload.id,
    }
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error
    return rejectWithValue(errorData)
  }
})
