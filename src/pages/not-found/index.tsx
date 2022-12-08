import { Button } from '../../components'
import { Container } from './styles'
import notFound from '../../assets/images/not-found.png'
import { useNavigate } from 'react-router-dom'

function NotFound() {
	const navigate = useNavigate()
	function redirectToHome() {
		navigate('/')
	}
	return (
		<Container>
			<h2>Parece que não há nada por aqui {':('}</h2>
			<img src={notFound} />
			<Button onClick={redirectToHome}>Voltar</Button>
		</Container>
	)
}

export default NotFound
