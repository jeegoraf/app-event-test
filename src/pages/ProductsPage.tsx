import { ProductsList } from '../components/productsList'
import { useGetProductsQuery } from '../utils/redux/queries/productApi'
import { StubPage } from './StubPage'

export function ProductsPage() {
  const { data, isLoading } = useGetProductsQuery()

  if (isLoading) return <StubPage>Загрузка...</StubPage>
  return data && <ProductsList items={data}></ProductsList>
}
