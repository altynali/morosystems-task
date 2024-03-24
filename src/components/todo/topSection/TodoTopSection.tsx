import { FC } from "react";
import { useAppSelector } from "../../../shared/redux/store";
import { MySelect } from "../../../shared/components/select/Select";
import classes from "./TodoTopSection.module.css";
import { Button, FormControl, Grid, SelectChangeEvent } from "@mui/material";
import {
  FilterTodoByValues,
  filterTodoByArr,
  filterTodoByDefaultValue,
} from "../../../shared/redux/todo/types";
import {
  selectCompletedTodosLength,
  selectTodoReducer,
} from "../../../shared/redux/todo/todoSlice";

type TodoTopSectionProps = {
  onChange: (filterTodoBy: FilterTodoByValues) => void;
  handleDeleteAllCompletedTodos: () => void;
  handleMakeAllTodosCompleted: () => void;
};

export const TodoTopSection: FC<TodoTopSectionProps> = ({
  onChange,
  handleDeleteAllCompletedTodos,
  handleMakeAllTodosCompleted,
}) => {
  const completedTodosLength = useAppSelector(selectCompletedTodosLength);
  const { todos } = useAppSelector(selectTodoReducer);
  const completedTodosStr = `${completedTodosLength} / ${todos.length}`;

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    onChange(e.target.value as FilterTodoByValues);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.root}
      gap={2}
    >
      <Grid item xs={6} md={2}>
        Completed Todos: {completedTodosStr}
      </Grid>
      <Grid item xs={6} md={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDeleteAllCompletedTodos}
        >
          Delete all completed todos
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleMakeAllTodosCompleted}
        >
          Make all todos completed
        </Button>
      </Grid>
      <Grid item xs={7} md={3}>
        <FormControl fullWidth>
          <MySelect
            options={filterTodoByArr}
            label="Select type"
            name="selectType"
            onChange={handleChange}
            defaultValue={filterTodoByDefaultValue}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
