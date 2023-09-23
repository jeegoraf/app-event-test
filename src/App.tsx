import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductsPage, BasketPage } from './pages'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Route>
        </Routes>
    )
}

export default App
