import { ReactSVG } from 'react-svg'

import { Container, MyBasket } from './styles'
import basket from '../../assets/icons/basket.svg'
import { useWindowSize } from '../../hooks'

export function Header() {
	const { width } = useWindowSize()
	return (
		<Container>
			<h1>WeMovies</h1>
			<MyBasket>
				<div>
					{width >= 778 && <p>Meu carrinho</p>}
					<span>0 itens</span>
				</div>
				<ReactSVG src={basket} />
			</MyBasket>
		</Container>
	)
}

export default Header
