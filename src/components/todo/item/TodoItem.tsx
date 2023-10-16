import { FC } from "react"
import { Button, Grid, Typography } from "@mui/material"
import { MyCard } from "../../card/MyCard"
import classes from "./TodoItem.module.css"
import { TodoType } from "../../../redux/reducers/todo/types"
import { convertTime } from "../../../utils/convertTime"
import { useAppDispatch } from "../../../redux/store"
import { completeTodo } from "../../../redux/reducers/todo/actions/completeTodo"
import { incompleteTodo } from "../../../redux/reducers/todo/actions/incompleteTodo"
import { deleteTodo } from "../../../redux/reducers/todo/actions/deleteTodo"

export type TodoItemProps = {
  todo: TodoType
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch()

  const { id, text, completedDate, createdDate } = todo

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id }))
  }

  const handleComplete = (id: string, isCompleted: boolean) => {
    if (isCompleted) {
      dispatch(completeTodo({ id }))
    } else {
      dispatch(incompleteTodo({ id }))
    }
  }

  return (
    <Grid
      item
      xs={6}
      md={5}
      lg={3}
      className={classes.root}
      justifyContent="center"
    >
      <MyCard
        {...todo}
        withCheckbox
        button={
          <Button
            className={classes.button}
            variant="contained"
            color="error"
            onClick={handleDeleteTodo}
          >
            Delete
          </Button>
        }
        handleComplete={handleComplete}
      >
        <Typography variant="h6" gutterBottom>
          {text}
        </Typography>
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
  )
}
