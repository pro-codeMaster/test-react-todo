import { useEffect } from "react";
import { useSessionContext } from "@providers/session";
import { useRoutes } from "./use_routes";

export const useAppRedirect = () => {
  const { state, dispatch } = useSessionContext();
  const { navigateTo } = useRoutes();
  useEffect(() => {
    if (state.status === "INITIALIZING" && !state.user?.token) {
      dispatch({ type: "LOGIN" });
      navigateTo("signIn");
      return;
    }
  }, []);
};
