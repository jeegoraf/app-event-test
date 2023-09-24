import { ProductsList } from '../components/productsList'
import { useGetProductsQuery } from '../utils/redux/queries/productApi'
import LoadingPage from './LoadingPage'

export function ProductsPage() {
  const { data, isLoading } = useGetProductsQuery()

  if (isLoading) return <LoadingPage />
  return <ProductsList items={data}></ProductsList>
}
