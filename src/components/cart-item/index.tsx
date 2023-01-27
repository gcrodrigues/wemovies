import { ChangeEvent } from 'react'
import { useCart } from '../../context/context'
import {
	ADD_PRODUCT,
	DECREASE_PRODUCT_AMOUNT,
	CHANGE_PRODUCT_AMOUNT,
	REMOVE_PRODUCT,
} from '../../context/reducers'
import { IProduct } from '../../types'
import { ptBrCurrency } from '../../utils'
import {
	Container,
	Header,
	InputCounter,
	Name,
	Price,
	Subtotal,
	TrashButton,
} from './styles'
import trash from '../../assets/icons/trash.svg'
import { ReactSVG } from 'react-svg'

type CartItemProps = {
	product: IProduct
}

function CartItem({ product }: CartItemProps) {
	const { dispatch } = useCart()
	function addProduct() {
		dispatch({ type: ADD_PRODUCT, payload: product })
	}

	function removeProduct() {
		dispatch({ type: DECREASE_PRODUCT_AMOUNT, payload: product })
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: CHANGE_PRODUCT_AMOUNT,
			payload: { ...product, amount: Number(e.target.value) },
		})
	}

	function handleDelete() {
		dispatch({
			type: REMOVE_PRODUCT,
			payload: product,
		})
	}

	return (
		<Container>
			<img src={product.image} />
			<Header>
				<Name>{product.title}</Name>
				<Price>{ptBrCurrency(product.price)}</Price>
			</Header>
			<InputCounter
				decreaseCount={removeProduct}
				increaseCount={addProduct}
				onChange={handleChange}
				count={product.amount}
			/>
			<Subtotal>
				<p>Subtotal</p>
				<span>{ptBrCurrency(product.amount * product.price)}</span>
			</Subtotal>
			<TrashButton onClick={handleDelete}>
				<ReactSVG src={trash} />
			</TrashButton>
		</Container>
	)
}

export default CartItem
