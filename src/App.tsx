import "./App.css";
import { Layout } from "./components/layout/Layout";
import ErrorBoundary from "./providers/errorBoundary";
import MainRouter from "./providers/router/MainRouter";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <Layout>
        <MainRouter />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
