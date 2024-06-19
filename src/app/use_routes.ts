import { useSessionContext } from "@providers/session";
import { routes, routeKeys } from "./routes_definitions";
import { useMemo } from "react";
import { generatePath, NavigateOptions, useNavigate } from "react-router-dom";
import type { RoutesPathsType, TRouteNames } from "./types";

export const useRoutes = () => {
  const { state } = useSessionContext();
  const navigate = useNavigate();
  const _getPath = (routeName: TRouteNames) =>
    generatePath(routes[routeName].path, {
      taskId: state.currentData.name,
    });

  const resolvedRoutes = useMemo<Record<TRouteNames, string>>(
    () =>
      routeKeys.reduce((acc, key) => {
        acc[key] = _getPath(key);
        return acc;
      }, {} as RoutesPathsType),
    [state]
  );

  const navigateTo = (routeName: TRouteNames, options?: NavigateOptions) => {
    navigate(resolvedRoutes[routeName], options);
  };

  return {
    routes: resolvedRoutes,
    navigateTo,
  };
};
