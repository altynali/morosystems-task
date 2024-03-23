import { Dashboard } from "./dashboard/Dashboard.lazy";
import NotFound from "./notFound/NotFound";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  Main = "/",
  NotFound = "*",
}

export type RouteType = {
  path: AppRoutes;
} & RouteProps;

export const routes: RouteType[] = [
  { path: AppRoutes.Main, Component: Dashboard },
  { path: AppRoutes.NotFound, Component: NotFound },
];
