import { useImmerReducer } from "use-immer";
import { ReactNode } from "react";
import { SessionContext, initialState } from "./session_context";
import { sessionReducer } from "./session_reducer";

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const { Provider } = SessionContext;
  const [state, dispatch] = useImmerReducer(sessionReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
