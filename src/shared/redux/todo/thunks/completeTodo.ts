import { createAsyncThunk } from "@reduxjs/toolkit";
import { SuccessUpdateTodo } from "../types";
import axios from "axios";
import todoApi from "../../../config/axiosConfig";

interface Payload {
  id: string;
}

export const completeTodo = createAsyncThunk<
  SuccessUpdateTodo,
  Payload,
  {
    rejectValue: unknown;
  }
>("todoReducer/completeTodo", async (payload, { rejectWithValue }) => {
  try {
    const response = await todoApi.post(`/tasks/${payload.id}/complete`, {
      params: payload,
    });

    return {
      changedTodo: response.data,
    };
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error;
    return rejectWithValue(errorData);
  }
});
