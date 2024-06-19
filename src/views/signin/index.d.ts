import type { CognitoUser } from '@aws-amplify/auth'

export enum ModalType {
  signIn = 'signIn',
  signUp = 'signUp',
  forgotPassword = 'forgotPassword',
  confirmResetPassword = 'confirmResetPassword',
  changePassword = 'changePassword',
  mfaCode = 'mfaCode',
}

export interface TChangePasswordProps {
  switchModalType: (modal: ModalType) => void
  user: CognitoUser | null
}

export interface TLoginProps {
  switchModalType: (modal: ModalType) => void
  saveUser: (user: CognitoUser | null) => void
}

export interface TConfirmResetPasswordProps {
  email: string
  switchModalType: (modal: ModalType) => void
}

export interface TForgotPasswordProps {
  switchModalType: (modal: ModalType) => void
  saveEmail: (email: string) => void
}

export interface TSignUpProps {
  switchModalType: (modal: ModalType) => void
  saveUser: (user: CognitoUser) => void
  email?: string
}

export interface TMfaProps {
  user: CognitoUser | null
  onSuccess: (user: CognitoUser | null) => void
}
