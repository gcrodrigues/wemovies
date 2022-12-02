import { Container, MyBasket } from './styles'
import basket from '../../assets/icons/basket.svg'

export function Header() {
	return (
		<Container>
			<h1>WeMovies</h1>
			<MyBasket>
				<div>
					<p>Meu carrinho</p>
					<span>0 itens</span>
				</div>
				<img src={basket} />
			</MyBasket>
		</Container>
	)
}

export default Header
