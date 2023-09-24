import { Box } from '@mui/material'
import { ProductCard } from '../productCard'
import { IProduct } from '../../types/productsTypes'
import { useAppSelector } from '../../utils/redux/hooks'
import { selectBasket } from '../../utils/redux/slices/basketSlice'

export function ProductsList(props: { items: Array<IProduct> | undefined }) {
  const productsInBasket = useAppSelector(selectBasket).map((item) => item.id)

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '15vh',
        rowGap: '5vh',
        margin: 'auto',
        pb: '2vh',
        pt: '1vh',
      }}
    >
      {props.items?.map((item) => {
        return (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.id}
            isInBasket={productsInBasket.includes(item.id)}
          />
        )
      })}
    </Box>
  )
}
