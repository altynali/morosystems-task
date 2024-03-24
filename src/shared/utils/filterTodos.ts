import { FilterTodoByValues, TodoType } from "../redux/todo/types";

//function that filters out todos
export const filterTodos = (
  todos: TodoType[],
  filterTodoBy: FilterTodoByValues
) => {
  switch (filterTodoBy) {
    //returning all todos in case user chose it
    case FilterTodoByValues.All:
      return todos;

    case FilterTodoByValues.Completed:
      //returning completed todos
      return todos.filter((todo) => todo.completed);

    case FilterTodoByValues.Incompleted:
      //returning incompleted todos
      return todos.filter((todo) => !todo.completed);

    default:
      return todos;
  }
};
