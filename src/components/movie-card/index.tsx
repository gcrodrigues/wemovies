import { ReactSVG } from 'react-svg'

import { IProduct } from '../../types'
import { Button, Container, Price, Title } from './styles'
import cart from '../../assets/icons/cart.svg'

type MovieCardProps = {
	movie: IProduct
}

function MovieCard({ movie }: MovieCardProps) {
	const priceFormated = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(movie.price)

	return (
		<Container>
			<img src={movie.image} alt={movie.title} />
			<Title>{movie.title}</Title>
			<Price>{priceFormated}</Price>

			<Button>
				<div>{<ReactSVG src={cart} />} 0</div> Adicionar ao carrinho
			</Button>
		</Container>
	)
}

export default MovieCard
