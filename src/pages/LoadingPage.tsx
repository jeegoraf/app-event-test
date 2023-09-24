import { Box } from '@mui/material'

export default function LoadingPage() {
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
      ЗАГРУЗКА ...
    </Box>
  )
}
