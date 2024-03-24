import { FC, PropsWithChildren } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import classes from "./Layout.module.css";
import { useAppSelector } from "../../shared/redux/store";
import { Loader } from "../../shared/components/loader/Loader";
import { selectTodoReducer } from "../../shared/redux/todo/todoSlice";
import { FetchState } from "../../shared/redux/todo/types";

export type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { fetchState } = useAppSelector(selectTodoReducer);

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.children}>
        {fetchState === FetchState.Loading ? <Loader /> : children}
      </div>
      <Footer />
    </div>
  );
};
