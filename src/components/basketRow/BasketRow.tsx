import { Box } from '@mui/material'
import { Button } from '..'
import { useAppDispatch } from '../../utils/redux/hooks'
import { removeProduct } from '../../utils/redux/slices/basketSlice'
import { IProduct } from '../../types/productsTypes'

export function BasketRow(props: IProduct) {
  const { name, price, id } = props

  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(removeProduct({ id, price }))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '30vh',
          borderRight: 1,
        }}
      >
        {name}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30vh',
          borderRight: 1,
        }}
      >
        {price}
      </Box>
      <Button onClick={handleDelete}>Убрать из корзины</Button>
    </Box>
  )
}
