import Card from "@mui/material/Card"
import Checkbox from "@mui/material/Checkbox"
import classes from "./MyCard.module.css"
import { FC, PropsWithChildren } from "react"
import { Button } from "@mui/material"

export type MyCardProps = {
  withCheckbox?: boolean
  isCompleted?: boolean
  onCheckboxOnchange?: () => void
  handleButtonClick: () => void
  buttonText: string
} & PropsWithChildren

export const MyCard: FC<MyCardProps> = ({
  children,
  onCheckboxOnchange,
  isCompleted,
  withCheckbox = false,
  handleButtonClick,
  buttonText,
}) => {
  return (
    <Card className={classes.card}>
      {withCheckbox && (
        <Checkbox checked={isCompleted} onChange={onCheckboxOnchange} />
      )}
      <div className={classes.content}>
        <div>{children}</div>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            variant="contained"
            color="error"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  )
}
