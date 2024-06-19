import { AuthDescription } from "./auth_description";
import { AuthHeader } from "./auth_header";
import { AuthLink } from "./auth_link";
import { ForgotPasswordForm } from "./forgot_password_form";
import { ModalType, TForgotPasswordProps } from "./index.d";

export const ForgotPassword = ({
  switchModalType,
  saveEmail,
}: TForgotPasswordProps) => (
  <>
    <AuthHeader value={"Forgot Password Header"} />
    <AuthDescription value={"ForgotPasswordDescription"} />
    <ForgotPasswordForm
      switchModalType={switchModalType}
      saveEmail={saveEmail}
    />
    <AuthLink
      label={"ForgotPasswordLink"}
      onClick={() => switchModalType(ModalType.signIn)}
    />
  </>
);
