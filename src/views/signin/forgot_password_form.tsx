import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

import { ModalType, TForgotPasswordProps } from "./index.d";

const initialValues = {
  email: "",
};

export const ForgotPasswordForm = ({
  switchModalType,
  saveEmail,
}: TForgotPasswordProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const forgotPassword = async (
    email: string,
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
    onSubmit: async (values, { setStatus }) => {
      await forgotPassword(values.email, setStatus);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label={"Email"}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        FormHelperTextProps={{ style: { marginLeft: 0 } }}
      />
      <LoadingButton
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ height: 42, my: 2 }}
        loading={isSubmitting}
      >
        {"Submit"}
      </LoadingButton>
    </form>
  );
};
