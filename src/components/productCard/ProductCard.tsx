import { IProduct } from '../../types/productsTypes'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button } from '..'
import { useAppDispatch } from '../../utils/redux/hooks'
import { addProduct } from '../../utils/redux/slices/basketSlice'
import { useNavigate } from 'react-router-dom'
import { incPrice } from '../../utils/redux/slices/sumSlice'

export function ProductCard(props: IProduct & { isInBasket: boolean }) {
  const { id, name, price, image, isInBasket } = props

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const addToBasket = () => {
    const product = { id, name, price, image }
    // добавили товар в стор
    dispatch(addProduct(product))
    dispatch(incPrice(price))
  }

  const goToBasket = () => navigate('/basket')

  return (
    <Card
      sx={{
        maxWidth: 360,
        maxHeight: 330,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: '#f2f0f0',
        boxShadow: 3,
      }}
    >
      <div>
        <CardMedia sx={{ height: 140 }} image={image} title={name} />
        <CardContent sx={{}}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {price} руб.
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button size="small" onClick={isInBasket ? goToBasket : addToBasket}>
          {isInBasket ? 'Оформить заказ' : 'Добавить в корзину'}
        </Button>
      </CardActions>
    </Card>
  )
}
