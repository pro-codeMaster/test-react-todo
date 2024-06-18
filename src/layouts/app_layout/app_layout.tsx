import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

export const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {new Date().toLocaleDateString()}
      </Box>
    </>
  );
};
