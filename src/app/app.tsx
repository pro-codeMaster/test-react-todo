import { SessionProvider } from 'providers'
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <SessionProvider>
      <AppRoutes />
    </SessionProvider>
  );
};
