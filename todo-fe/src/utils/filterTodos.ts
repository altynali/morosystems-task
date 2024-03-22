import { FilterTodoByValues, TodoType } from "../redux/todo/types"

export const filterTodos = (
  todos: TodoType[],
  filterTodoBy: FilterTodoByValues
) => {
  switch (filterTodoBy) {
    case FilterTodoByValues.All:
      return todos
    case FilterTodoByValues.Completed:
      return todos.filter((todo) => todo.completed === true)
    case FilterTodoByValues.Incompleted:
      return todos.filter((todo) => todo.completed === false)

    default:
      return todos
  }
}
