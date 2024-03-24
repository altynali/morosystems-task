import { Box, Button } from "@mui/material";
import { useState } from "react";
import { MyInput } from "../input/MyInput";
import classes from "./Form.module.css";
import { useAppDispatch } from "../../redux/store";
import { createTodo } from "../../redux/todo/thunks";
import { isNameValid } from "../../utils/validation/nameValidation";
import { debounce } from "../../utils/debounce/debounce";

export const Form = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const isFormValid = !error && name && isDirty;

  const handleCreateToDo = () => {
    if (isFormValid) {
      dispatch(createTodo({ text: name }));
      setName("");
      setError("");
    }
  };

  const debouncedValidation = debounce((value: string) => {
    isNameValid(value, isDirty, setError);
  }, 300);

  const nameChangeHandler = (value: string) => {
    setName(value);
    //for better performance
    debouncedValidation(value);
  };

  return (
    <Box className={classes.root}>
      <MyInput
        required
        className={classes.input}
        label="Name"
        helperText={error}
        value={name}
        onChange={(e) => nameChangeHandler(e.target.value)}
        onBlur={() => setIsDirty(true)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateToDo}
        disabled={!isFormValid}
      >
        Add
      </Button>
    </Box>
  );
};
