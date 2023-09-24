import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Header } from '../components'

export function HomePage() {
  const location = useLocation()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />
      <Outlet />
      {location.pathname === '/' && <div>БлЯ</div>}
    </Box>
  )
}
