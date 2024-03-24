import { CaseReducer } from "@reduxjs/toolkit";
import {
  fetchTodos,
  createTodo,
  deleteTodo,
  editTodoText,
  completeTodo,
  incompleteTodo,
} from "./thunks";
import { FetchState, TodoState } from "./types";

type ErrorReducerFunction = CaseReducer<TodoState, unknown>;

export const errorReducers: Record<string, ErrorReducerFunction> = {
  [fetchTodos.rejected.type]: (state) => {
    state.fetchState = FetchState.Error;
  },
  [createTodo.rejected.type]: (state) => {
    state.fetchState = FetchState.Error;
  },
  [deleteTodo.rejected.type]: (state) => {
    state.fetchState = FetchState.Error;
  },
  [editTodoText.rejected.type]: (state) => {
    state.fetchState = FetchState.Error;
  },
  [completeTodo.rejected.type]: (state) => {
    state.fetchState = FetchState.Error;
  },
  [incompleteTodo.rejected.type]: (state) => {
    state.fetchState = FetchState.Error;
  },
};
