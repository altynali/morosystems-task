import Card from "@mui/material/Card"
import { TodoType } from "../../redux/reducers/todo/types"
import Checkbox from "@mui/material/Checkbox"
import classes from "./MyCard.module.css"
import { FC, PropsWithChildren, ReactElement, useState } from "react"

export type MyCardProps = {
  button?: ReactElement
  withCheckbox?: boolean
  handleComplete?: (id: string, isCompleted: boolean) => void
} & Partial<TodoType> &
  PropsWithChildren

export const MyCard: FC<MyCardProps> = ({
  id,
  completed,
  button,
  children,
  handleComplete,
  withCheckbox = false,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed || false)

  const onCheckboxClick = () => {
    const updatedIsCompleted = !isCompleted
    setIsCompleted(updatedIsCompleted)

    if (id) {
      handleComplete?.(id, updatedIsCompleted)
    }
  }

  return (
    <Card className={classes.card}>
      {withCheckbox && (
        <Checkbox checked={isCompleted} onClick={onCheckboxClick} />
      )}
      <div className={classes.content}>
        {children}
        <div className={classes.button}>{button}</div>
      </div>
    </Card>
  )
}
