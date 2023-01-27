import { ReactSVG } from 'react-svg'

import { IProduct } from '../../types'
import { Button, Container, Price, Title } from './styles'
import cart from '../../assets/icons/cart.svg'
import { useCart } from '../../context/context'
import { useState } from 'react'
import { ADD_PRODUCT } from '../../context/reducers'
import { ptBrCurrency } from '../../utils'

type MovieCardProps = {
	movie: IProduct
}

function MovieCard({ movie }: MovieCardProps) {
	const {
		state: { products },
		dispatch,
	} = useCart()
	const [variant, setVariant] = useState<'success' | 'default'>('default')
	const priceFormated = ptBrCurrency(movie.price)

	function handleAddMovieToCart() {
		setVariant('success')
		dispatch({ type: ADD_PRODUCT, payload: movie })

		setTimeout(() => setVariant('default'), 2000)
	}

	return (
		<Container>
			<img src={movie.image} alt={movie.title} />
			<Title>{movie.title}</Title>
			<Price>{priceFormated}</Price>

			<Button variant={variant} onClick={handleAddMovieToCart}>
				<div>
					<ReactSVG src={cart} />
					{products.map(product => {
						if (movie.id === product.id) {
							return product.amount
						}
					})}
				</div>
				{variant === 'success' ? 'Item Adicionado' : 'Adicionar ao carrinho'}
			</Button>
		</Container>
	)
}

export default MovieCard
