import { BasketRow } from '../components/basketRow/BasketRow'
import { useAppSelector } from '../utils/redux/hooks'
import { selectBasket } from '../utils/redux/slices/basketSlice'
import { Box, Typography } from '@mui/material'
import { selectTotalPrice } from '../utils/redux/slices/sumSlice'

export function BasketPage() {
  const productsInBasket = useAppSelector(selectBasket)

  const totalPrice = useAppSelector(selectTotalPrice)

  if (productsInBasket.length === 0)
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: 0,
          margin: 0,
        }}
      >
        Ваша корзина пуста
      </Box>
    )

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
      }}
    >
      {productsInBasket.map((item) => (
        <BasketRow name={item.name} price={item.price} id={item.id} />
      ))}
      <Typography>Итого: {totalPrice.sum}</Typography>
    </Box>
  )
}
