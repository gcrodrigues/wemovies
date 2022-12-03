import { useEffect, useState } from 'react'

import { MovieCard } from '../../components'
import { fetchProducts } from '../../services'
import { IProduct } from '../../types'
import { Container } from './styles'

function Home() {
	const [movies, setMovies] = useState<IProduct[]>([])

	useEffect(() => {
		const fetchMovieList = async () => {
			const { data } = await fetchProducts()
			setMovies(data)
		}

		fetchMovieList()
	}, [])

	return (
		<Container>
			{movies.map(movie => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</Container>
	)
}

export default Home
