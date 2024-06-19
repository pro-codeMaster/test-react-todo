import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useState } from "react";

import { enqueueSnackbar } from "notistack";
import { ModalType, TSignUpProps } from "./index.d";

export const SignUp = ({ switchModalType, saveUser, email }: TSignUpProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastMsg, setLastMsg] = useState("");

  const formik = useFormik({
    initialValues: { email: email, password: "" },
    enableReinitialize: true,
    onSubmit: async (values) => {
      setLastMsg("");
      setIsSubmitting(true);
      try {
      } catch (error) {
        enqueueSnackbar("Error", { variant: "error" });
        setLastMsg((error as Error).message);
        // eslint-disable-next-line no-console
        console.log("error signing up:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <Box>
      <Typography variant="body2" mb={4.5} textAlign="center">
        {"Create New Account"}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: 3 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ marginBottom: 3 }}
        />
        {lastMsg && (
          <Typography variant="body1" mt={2} color="error">
            {lastMsg}
          </Typography>
        )}

        <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
          sx={{ height: 33, fontSize: "14px", marginBottom: 3 }}
          loading={isSubmitting}
          size="small"
        >
          {"SignUp"}
        </LoadingButton>
        <Link href="#" onClick={() => switchModalType(ModalType.signIn)}>
          {"Already have account?"}
        </Link>
      </form>
    </Box>
  );
};
