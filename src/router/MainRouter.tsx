import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { routes } from "../pages/routes";
import { Layout } from "../components/layout/Layout";
import { Loader } from "../components/loader/Loader";
import { Suspense, useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { fetchTodos } from "../redux/todo/thunks";
import ErrorBoundary from "../components/errorBoundary";

const MainRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} Component={Component} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
};

export default MainRouter;
