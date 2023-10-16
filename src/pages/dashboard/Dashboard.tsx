import { Box } from "@mui/material"
import { Form } from "../../components/form/Form"
import { TodoList } from "../../components/todo/list/TodoList"

const Dashboard = () => {
  return (
    <Box>
      <Form />
      <TodoList />
    </Box>
  )
}

export default Dashboard
