import { TodoState, TodoType } from "../types";

export const updateTodoInState = (state: TodoState, changedTodo: TodoType) => {
  const todoIndex = state.todos.findIndex((todo) => todo.id === changedTodo.id);
  if (todoIndex !== -1) {
    state.todos[todoIndex] = changedTodo;
  }
};
