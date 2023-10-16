import { FC, PropsWithChildren } from "react"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import classes from "./Layout.module.css"
import { useAppSelector } from "../../redux/store"
import { selectTodoReducer } from "../../redux/reducers/todo/todoReducer"
import { FetchState } from "../../redux/reducers/todo/types"
import { Loader } from "../loader/Loader"

export type LayoutProps = PropsWithChildren

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { fetchState } = useAppSelector(selectTodoReducer)

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.children}>
        {fetchState === FetchState.Loading ? <Loader /> : children}
      </div>
      <Footer />
    </div>
  )
}
