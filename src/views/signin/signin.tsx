import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { AuthDialog } from "./auth_dialog";

const styledBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  width: 408,
  borderRadius: 1,
  display: "flex",
  flexDirection: "column",
  outline: 0,
};

export const SignIn = () => {
  return (
    <Modal
      hideBackdrop
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styledBox}>
        <AuthDialog />
      </Box>
    </Modal>
  );
};
