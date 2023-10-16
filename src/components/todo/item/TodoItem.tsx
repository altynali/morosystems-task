import { FC, useEffect, useState } from "react"
import { Grid, Typography } from "@mui/material"
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

  const { id, text, completedDate, createdDate, completed } = todo
  const [isCompleted, setIsCompleted] = useState<boolean>(completed)

  const onCheckboxOnchange = () => {
    const updatedIsCompleted = !isCompleted
    setIsCompleted(updatedIsCompleted)

    if (id) {
      handleComplete?.(id, updatedIsCompleted)
    }
  }

  useEffect(() => {
    setIsCompleted(completed)
  }, [completed])

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
        withCheckbox
        onCheckboxOnchange={onCheckboxOnchange}
        isCompleted={isCompleted}
        handleButtonClick={handleDeleteTodo}
        buttonText="Delete"
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
