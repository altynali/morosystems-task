import { Route, Routes } from "react-router-dom";
import { routes } from "../../pages/routes";
import { Loader } from "../../shared/components/loader/Loader";
import { Suspense, useEffect } from "react";
import { useAppDispatch } from "../../shared/redux/store";
import { fetchTodos } from "../../shared/redux/todo/thunks";

const MainRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
