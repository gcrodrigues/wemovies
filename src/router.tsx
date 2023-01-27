import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart, PurchaseMade } from './pages'

export function Router() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="cart" element={<Cart />} />
					<Route path="success" element={<PurchaseMade />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
