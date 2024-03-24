import { FC, useState } from "react";
import { Typography } from "@mui/material";
import classes from "./TodoText.module.css";
import { MyInput } from "../../../shared/components/input/MyInput";
import { useAppDispatch } from "../../../shared/redux/store";
import { editTodoText } from "../../../shared/redux/todo/thunks";

export type TodoTextProps = {
  id: string;
  text: string;
};

export const TodoText: FC<TodoTextProps> = ({ id, text }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(text);
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    if (text === newText) {
      setEditMode(false);
      return;
    } else {
      dispatch(editTodoText({ id, newText }));
      setEditMode(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      {editMode ? (
        <>
          <MyInput
            required
            className={classes.input}
            label="Text"
            helperText=""
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <span className={classes.right} onClick={handleEdit}>
            ✔️
          </span>
        </>
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            {newText}
          </Typography>
          <span className={classes.right} onClick={() => setEditMode(true)}>
            ✏️
          </span>
        </>
      )}
    </div>
  );
};
