import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import todoApi from "../../../config/axiosConfig";

interface Payload {
  id: string;
}

interface Success {
  id: string;
}

export const deleteTodo = createAsyncThunk<
  Success,
  Payload,
  {
    rejectValue: unknown;
  }
>("todoReducer/deleteTodo", async ({ id }, { rejectWithValue }) => {
  try {
    await todoApi.delete(`/tasks/${id}`);

    return {
      id,
    };
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error;
    return rejectWithValue(errorData);
  }
});
