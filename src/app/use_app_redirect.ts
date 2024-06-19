import { useEffect } from "react";
import { useSessionContext } from '@providers/session'

export const useAppRedirect = () => {
  const { state, dispatch } = useSessionContext()
  useEffect(() => {
    if (state.status === "INITIALIZING" && !state.user?.token) {
      dispatch({ type: "LOGIN" });
      return;
    }
  }, []);
};
