import { LoadingButton } from "@mui/lab";
import { Box, Link, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";

import { ModalType } from "./index.d";
import { TUser } from "@providers/session/session";

const initialValues = {
  email: "",
  password: "",
  acceptTerms: false,
};

interface Props {
  switchModalType: (modal: ModalType) => void;
  saveUser: (user: TUser | null) => void;
}

export const LogInForm = ({ switchModalType, saveUser }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signIn = async (
    email: string,
    password: string,
    setStatus: (status?: string) => void
  ) => {
    setIsSubmitting(true);
    try {
    } catch (err) {
      setStatus((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {},
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} data-testid="log-in-submit">
        <TextField
          fullWidth
          id="email"
          name="email"
          label={"Email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: 3 }}
          inputProps={{
            "data-testid": "email",
          }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label={"Password"}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ marginBottom: 3 }}
          inputProps={{
            "data-testid": "password",
          }}
        />
        <LoadingButton
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          sx={{ mb: 3 }}
          loading={isSubmitting}
        >
          {"SignIn"}
        </LoadingButton>
        <Box mb={3}>
          <Link
            href="#"
            onClick={() => switchModalType(ModalType.forgotPassword)}
          >
            {"Forgot password?"}
          </Link>
        </Box>
        <Box mb={3}>
          <Link href="#" onClick={() => switchModalType(ModalType.signUp)}>
            {"Create New Account"}
          </Link>
        </Box>{" "}
      </form>
    </div>
  );
};
