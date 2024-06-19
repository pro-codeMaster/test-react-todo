import { Typography } from '@mui/material'

type Props = {
  value?: string
}

export const AuthHeader = ({ value }: Props) => {
  return value ? (
    <Typography variant="h2" data-testid="auth-header" sx={{ mb: 2 }}>
      {value}
    </Typography>
  ) : null
}
