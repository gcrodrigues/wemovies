import { Container, LinkButton } from './styles'
import purchaseMade from '../../assets/images/purchase-made.png'

function PurchaseMade() {
	return (
		<Container>
			<h2>Compra realizada com sucesso!</h2>
			<img src={purchaseMade} />
			<LinkButton to="/">Voltar</LinkButton>
		</Container>
	)
}

export default PurchaseMade
