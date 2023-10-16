import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { DashboardLazy } from "../pages/dashboard/Dashboard.lazy"
import { AppRoutes } from "../pages/dashboard/routes"
import { Layout } from "../components/layout/Layout"
import { Loader } from "../components/loader/Loader"
import { Suspense } from "react"
import { useAppDispatch } from "../redux/store"
import { fetchTodos } from "../redux/reducers/todo/actions/fetchTodos"

const MainRouter = () => {
  const dispatch = useAppDispatch()

  dispatch(fetchTodos())

  return (
    <div>
      {/* <ErrorBoundary> */}
      {/* <ThemeSettingProvider> */}
      <CssBaseline />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={AppRoutes.Main} element={<DashboardLazy />} />
          </Routes>
        </Suspense>
      </Layout>
      {/* </ThemeSettingProvider> */}
      {/* </ErrorBoundary> */}
    </div>
  )
}

export default MainRouter
