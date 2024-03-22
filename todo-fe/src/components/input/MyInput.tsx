import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
} from "@mui/material"
import { FC } from "react"

export const MyInput: FC<TextFieldProps> = ({
  helperText,
  label,
  value,
  onChange,
  variant = "outlined",
  className,
  required,
  type,
}) => {
  return (
    <div className={className}>
      <FormControl>
        <TextField
          required={required}
          label={label}
          variant={variant}
          aria-describedby="my-helper-text"
          value={value}
          onChange={onChange}
          type={type}
        />
        <FormHelperText id="my-helper-text" error>
          {helperText}
        </FormHelperText>
      </FormControl>
    </div>
  )
}
