import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { DashboardLazy } from "../pages/dashboard/Dashboard.lazy"
import { AppRoutes } from "../pages/dashboard/routes"
import { Layout } from "../components/layout/Layout"
import { Loader } from "../components/loader/Loader"
import { Suspense, useEffect } from "react"
import { useAppDispatch } from "../redux/store"
import { fetchTodos } from "../redux/todo/thunks"
import ErrorBoundary from "../components/errorBoundary"

const MainRouter = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <ErrorBoundary>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={AppRoutes.Main} element={<DashboardLazy />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}

export default MainRouter
