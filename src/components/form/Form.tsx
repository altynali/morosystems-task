import { Box, Button } from "@mui/material"
import { useState } from "react"
import { MyInput } from "../input/MyInput"
import classes from "./Form.module.css"
import { useAppDispatch } from "../../redux/store"
import { createTodo } from "../../redux/reducers/todo/actions/createTodo"

export const Form = () => {
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>("")
  // const [description, setDescription] = useState<string>("")
  // const [time, setTime] = useState<string>("")

  const handleCreateToDo = () => {
    if (!name) return
    dispatch(createTodo({ text: name }))

    setName("")
    // setDescription("")
    // setTime("")
  }

  return (
    <Box className={classes.root}>
      <MyInput
        required
        className={classes.input}
        label="Name"
        helperText=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <MyInput
        className={classes.input}
        label="Description"
        helperText=""
        value={description}
        onChange={setDescription}
      />
      <MyInput
        required
        className={classes.input}
        helperText=""
        value={time}
        onChange={setTime}
        type="datetime-local"
      /> */}
      <Button variant="contained" color="primary" onClick={handleCreateToDo}>
        Add
      </Button>
    </Box>
  )
}
