import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAppRedirect } from "app/use_app_redirect";

export const AppLayout = () => {
  useAppRedirect()
  return (
    <>
      <Outlet />
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {new Date().toLocaleDateString()}
      </Box>
    </>
  );
};
