import Typography from '@mui/material/Typography'

import { LogInForm } from './log_in_form'
import { TLoginProps } from './index.d'

// TODO: remove this component

export const LogIn = ({ switchModalType, saveUser }: TLoginProps) => (
  <>
    <Typography variant="h2" mb={2}>
      SignIn
    </Typography>
    <LogInForm switchModalType={switchModalType} saveUser={saveUser} />
  </>
)
