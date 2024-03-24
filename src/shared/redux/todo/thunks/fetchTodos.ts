import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoType } from "../types";
import axios from "axios";
import todoApi from "../../../config/axiosConfig";

interface Success {
  data: TodoType[];
}

export const fetchTodos = createAsyncThunk<
  Success,
  void,
  {
    rejectValue: unknown;
  }
>("todoReducer/fetchTodos", async (_, { rejectWithValue }) => {
  try {
    const response = await todoApi.get("/tasks");
    return {
      data: response.data,
    };
  } catch (error) {
    const errorData = axios.isAxiosError(error) ? error.response?.data : error;
    return rejectWithValue(errorData);
  }
});
