import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

export function Button(props: MuiButtonProps) {
  const { variant = 'contained', size, onClick, children, ...rest } = props
  return (
    <MuiButton variant={variant} size={size} onClick={onClick} {...rest}>
      {children}
    </MuiButton>
  )
}
