import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./routes_definitions";
import { AppLayout } from "@layouts/app_layout";

const RouteConfig = () => {
  return (
    <Routes>
      {Object.keys(routes).map((section) => (
        <Route key={section} element={<AppLayout />}>
          <Route path="*" element={<div>Hello World</div>} />
        </Route>
      ))}
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", Component: RouteConfig }]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
