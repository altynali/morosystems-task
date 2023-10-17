import { combineReducers } from "@reduxjs/toolkit"
import { todoSlice } from "./todo/todoSlice"

const reducers = {
  todoReducer: todoSlice.reducer,
}

export const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>
