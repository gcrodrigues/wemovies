import { CartItem } from '../../components'
import { useCart } from '../../context/context'
import { BUY_PRODUCTS } from '../../context/reducers'
import { ptBrCurrency } from '../../utils'
import NotFound from '../not-found'
import {
	Button,
	CartContainer,
	CartHeader,
	Container,
	SubmitFormContainer,
	Total,
	Wrapper,
} from './styles'

function Cart() {
	const {
		state: { products },
		dispatch,
	} = useCart()

	const cartItems = products.sort(function (a, b) {
		if (a.title < b.title) {
			return -1
		}
		if (a.title > b.title) {
			return 1
		}
		return 0
	})

	const totalPrice = products.reduce(
		(acc, product) => product.amount * product.price + acc,
		0
	)

	function submitPurchase() {
		dispatch({ type: BUY_PRODUCTS, payload: products[0] })
	}

	if (!products.length) {
		return <NotFound />
	}

	return (
		<Container>
			<Wrapper>
				<CartContainer>
					<CartHeader>
						<p>PRODUTO</p>
						<p>QTD</p>
						<p>SUBTOTAL</p>
					</CartHeader>
					{cartItems.map(
						item => item.amount > 0 && <CartItem key={item.id} product={item} />
					)}
				</CartContainer>

				<SubmitFormContainer>
					<Button onClick={submitPurchase} to="/success">
						Finalizar Pedido
					</Button>

					<Total>
						<h2>Total</h2>
						<span>{ptBrCurrency(totalPrice)}</span>
					</Total>
				</SubmitFormContainer>
			</Wrapper>
		</Container>
	)
}

export default Cart
