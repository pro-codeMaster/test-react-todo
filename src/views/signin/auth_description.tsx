import { styled } from '@mui/material/styles'

const StyledDescription = styled('span')(() => ({
  color: 'rgba(0, 0, 0, 0.6)',
  fontSize: 14,
  marginBottom: 32,
}))

type Props = {
  value?: string
}
export const AuthDescription: React.FC<Props> = ({ value }: Props) =>
  value ? <StyledDescription data-testid="auth-description">{value}</StyledDescription> : null
