import { ReactSVG } from 'react-svg'

import { Container, MyBasket } from './styles'
import basket from '../../assets/icons/basket.svg'
import { useWindowSize } from '../../hooks'
import { useCart } from '../../context/context'

export function Header() {
	const { width } = useWindowSize()
	const {
		state: { products },
	} = useCart()

	const productsAmount = products.reduce(
		(acc, product) => product.amount + acc,
		0
	)

	return (
		<Container>
			<h1>WeMovies</h1>
			<MyBasket to="/cart">
				<div>
					{width >= 778 && <p>Meu carrinho</p>}
					<span>{productsAmount} itens</span>
				</div>
				<ReactSVG src={basket} />
			</MyBasket>
		</Container>
	)
}

export default Header
