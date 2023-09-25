import { BasketRow } from '../components/basketRow'
import { useAppSelector } from '../utils/redux/hooks'
import {
  selectBasket,
  selectTotalPrice,
} from '../utils/redux/slices/basketSlice'
import { Box, Typography } from '@mui/material'
import { StubPage } from './StubPage'

export function BasketPage() {
  const productsInBasket = useAppSelector(selectBasket)

  const totalPrice = useAppSelector(selectTotalPrice)

  if (productsInBasket.length === 0)
    return <StubPage>Ваша корзина пуста</StubPage>

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
      }}
    >
      {productsInBasket.map((item) => (
        <BasketRow
          key={item.id}
          name={item.name}
          price={item.price}
          id={item.id}
        />
      ))}
      <Typography>Итого: {totalPrice}</Typography>
    </Box>
  )
}
