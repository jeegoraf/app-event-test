import { Box } from '@mui/material'
import { ReactNode } from 'react'

type StubPageProps = {
  children: ReactNode
}

export function StubPage(props: StubPageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {props.children}
    </Box>
  )
}
