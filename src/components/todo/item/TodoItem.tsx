import { FC, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { MyCard } from "../../../shared/components/card/MyCard";
import classes from "./TodoItem.module.css";
import { convertTime } from "../../../shared/utils/convertTime";
import { useAppDispatch } from "../../../shared/redux/store";
import { TodoText } from "../text/TodoText";
import { completeTodo } from "../../../shared/redux/todo/thunks";
import { deleteTodo } from "../../../shared/redux/todo/thunks";
import { incompleteTodo } from "../../../shared/redux/todo/thunks";
import { TodoType } from "../../../shared/redux/todo/types";

export type TodoItemProps = {
  todo: TodoType;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const { id, text, completedDate, createdDate, completed } = todo;

  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  const onCheckboxOnchange = () => {
    const updatedIsCompleted = !isCompleted;
    setIsCompleted(updatedIsCompleted);

    if (id) {
      handleComplete?.(id, updatedIsCompleted);
    }
  };

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleComplete = (id: string, isCompleted: boolean) => {
    if (isCompleted) {
      dispatch(completeTodo({ id }));
    } else {
      dispatch(incompleteTodo({ id }));
    }
  };

  return (
    <Grid
      item
      xs={10}
      md={5}
      lg={3}
      className={classes.root}
      justifyContent="center"
    >
      <MyCard
        withCheckbox
        onCheckboxOnchange={onCheckboxOnchange}
        isCompleted={isCompleted}
        handleButtonClick={handleDeleteTodo}
        buttonText="Delete"
      >
        <TodoText id={id} text={text} />

        {createdDate && (
          <Typography variant="body2" color="textSecondary">
            Created: {convertTime(createdDate)}
          </Typography>
        )}
        {completedDate && (
          <Typography variant="body2" color="textSecondary">
            Completed: {convertTime(completedDate)}
          </Typography>
        )}
      </MyCard>
    </Grid>
  );
};
