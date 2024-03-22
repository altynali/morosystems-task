import { Box, Button } from "@mui/material"
import { useState } from "react"
import { MyInput } from "../input/MyInput"
import classes from "./Form.module.css"
import { useAppDispatch } from "../../redux/store"
import { createTodo } from "../../redux/todo/thunks"

export const Form = () => {
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleCreateToDo = () => {
    if (!name) {
      setError("Name is required")
      return
    }
    dispatch(createTodo({ text: name }))

    setName("")
  }

  return (
    <Box className={classes.root}>
      <MyInput
        required
        className={classes.input}
        label="Name"
        helperText={error}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleCreateToDo}>
        Add
      </Button>
    </Box>
  )
}
