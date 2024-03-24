import { TodoItem } from "../item/TodoItem";
import { useAppDispatch, useAppSelector } from "../../../shared/redux/store";
import classes from "./TodoList.module.css";
import { Grid } from "@mui/material";
import { TodoTopSection } from "../topSection/TodoTopSection";
import { useCallback, useEffect, useState } from "react";
import { filterTodos } from "../../../shared/utils/filterTodos";
import { selectTodoReducer } from "../../../shared/redux/todo/todoSlice";
import { deleteAllCompletedTodos } from "../../../shared/redux/todo/thunks";
import { makeAllTodosCompleted } from "../../../shared/redux/todo/thunks";
import { TodoType, FilterTodoByValues } from "../../../shared/redux/todo/types";

export const TodoList = () => {
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector(selectTodoReducer);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>(todos);

  const handleChangeFilterTodoBy = useCallback(
    (filterTodoBy: FilterTodoByValues) => {
      const newTodos = filterTodos(todos, filterTodoBy);
      setFilteredTodos(newTodos);
    },
    [todos]
  );

  const handleDeleteAllCompletedTodos = () => {
    dispatch(deleteAllCompletedTodos({ todos }));
  };

  const handleMakeAllTodosCompleted = () => {
    dispatch(makeAllTodosCompleted({ todos }));
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <>
      <TodoTopSection
        onChange={handleChangeFilterTodoBy}
        handleDeleteAllCompletedTodos={handleDeleteAllCompletedTodos}
        handleMakeAllTodosCompleted={handleMakeAllTodosCompleted}
      />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gap={2}
        className={classes.root}
      >
        {filteredTodos.length !== 0
          ? filteredTodos?.map((todo) => <TodoItem todo={todo} key={todo.id} />)
          : "no todos"}
      </Grid>
    </>
  );
};
