import { SessionProvider } from "@providers/session";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <SessionProvider>
      <AppRoutes />
    </SessionProvider>
  );
};
