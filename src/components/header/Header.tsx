import { Box, Toolbar, AppBar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Button } from '..'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBasket } from '../../utils/redux/slices/basketSlice'

export function Header() {
  const navigate = useNavigate()

  // получаем список товаров в корзине из стора
  const basket = useSelector(selectBasket)

  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={() => navigate('/')} startIcon={<HomeIcon />}>
            Домой
          </Button>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button onClick={() => navigate('/products')}>Каталог</Button>
            <Button onClick={() => navigate('/basket')}>
              Корзина: {basket.length}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ minHeight: '0px', padding: 0 }} />
    </Box>
  )
}
