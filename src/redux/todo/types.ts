export type TodoType = {
  id: string
  text: string
  completed: boolean
  createdDate: number
  completedDate?: number
}

export interface TodoState {
  todos: TodoType[]
  fetchState: FetchState
}

export enum FetchState {
  None = 1,
  Loading = 2,
  Loaded = 3,
  Error = 4,
}

export type Option = {
  value: string
  label: string
}

export enum FilterTodoByValues {
  All = "all",
  Completed = "completed",
  Incompleted = "incompleted",
}

export const filterTodoByArr = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "incompleted", label: "Incompleted" },
]

export const filterTodoByDefaultValue = FilterTodoByValues.All

export interface SuccessUpdateTodo {
  changedTodo: TodoType
}
