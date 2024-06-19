import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./routes_definitions";
import { AppLayout } from "@layouts/app_layout";
import { TRouteNames } from "./types";

const RouteConfig = () => {
  return (
    <Routes>
      {Object.keys(routes).map((section) => {
        const routeConfig = routes[section as TRouteNames];
        const Element = routeConfig.component;
        return (
          <Route key={section} element={<AppLayout />}>
            <Route path={routeConfig.path} element={<Element />} />
            <Route path="*" element={<div>Hello World</div>} />
          </Route>
        );
      })}
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", Component: RouteConfig }]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
