import { Link } from '@mui/material'

type Props = {
  label?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export const AuthLink = ({ label, onClick }: Props) =>
  label && onClick ? (
    <Link key={label} sx={{ marginRight: 1 }} href="#" onClick={onClick} data-testid="auth-link">
      {label}
    </Link>
  ) : null
