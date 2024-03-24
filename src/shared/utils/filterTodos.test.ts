import { filterTodos } from "./filterTodos";
import { FilterTodoByValues, TodoType } from "../redux/todo/types";

describe("filterTodos", () => {
  const todos: TodoType[] = [
    {
      id: "1",
      text: "Todo 1",
      completed: true,
      createdDate: 1,
    },
    {
      id: "2",
      text: "Todo 2",
      completed: true,
      createdDate: 2,
    },
    {
      id: "3",
      text: "Todo 3",
      completed: false,
      createdDate: 3,
    },
  ];

  test("should return all todos when FilterTodoByValues is All", () => {
    const filteredTodos = filterTodos(todos, FilterTodoByValues.All);
    expect(filteredTodos).toEqual(todos);
  });

  test("should return completed todos when FilterTodoByValues is Completed", () => {
    const filteredTodos = filterTodos(todos, FilterTodoByValues.Completed);
    expect(filteredTodos).toEqual([todos[0], todos[1]]);
  });

  test("should return incompleted todos when FilterTodoByValues is Incompleted", () => {
    const filteredTodos = filterTodos(todos, FilterTodoByValues.Incompleted);
    expect(filteredTodos).toEqual([todos[2]]);
  });

  test("should return all todos when FilterTodoByValues is unknown", () => {
    const filteredTodos = filterTodos(todos, "unknown" as FilterTodoByValues);
    expect(filteredTodos).toEqual(todos);
  });
});
