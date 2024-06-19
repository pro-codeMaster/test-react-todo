import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ModalType } from "./index.d";
import { LogIn } from "./log_in";
import { SignUp } from "./sign_up_form";
import { ForgotPassword } from "./forgot_password";
import { TUser } from "@providers/session/session";

export const AuthDialog = ({
  modalStep,
  email: emailFromProps,
}: {
  modalStep?: string;
  email?: string;
}) => {
  const { accountName = "" } = useParams();
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(
    modalStep === "signUp" ? ModalType.signUp : ModalType.signIn
  );
  const [email, setEmail] = useState("");

  const switchModalType = (modal: ModalType) => setModalType(modal);
  const saveEmail = (savedEmail: string) => setEmail(savedEmail);
  const [user, saveUser] = useState<TUser | null>(null);

  const getAuthForm = () => {
    switch (modalType) {
      case ModalType.signIn:
        return <LogIn switchModalType={switchModalType} saveUser={saveUser} />;
      case ModalType.signUp:
        return (
          <SignUp
            switchModalType={switchModalType}
            saveUser={saveUser}
            email={email}
          />
        );
      case ModalType.forgotPassword:
        return (
          <ForgotPassword
            switchModalType={switchModalType}
            saveEmail={saveEmail}
          />
        );

      default:
        return null;
    }
  };
  return getAuthForm();
};
