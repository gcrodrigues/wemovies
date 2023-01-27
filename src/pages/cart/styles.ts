import styled from 'styled-components'
import { LinkButton } from '../purchase-made/styles'

export const Container = styled.div`
	height: calc(100% - 9.4rem);
	padding: 0 1.6rem 1.6rem;
	display: flex;

	@media screen and (min-width: 768px) {
		height: auto;
	}
`

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 0.4rem;
	padding: 1.6rem;
	display: grid;

	@media screen and (min-width: 768px) {
		display: block;
		padding: 2.1rem;
	}
`

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin-bottom: 1.6rem;
	overflow: auto;
`

export const CartHeader = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-areas: 'product . quantity subtotal .';
		grid-template-columns: 1fr 1.3fr 1.5fr 1fr 1fr;

		p {
			text-transform: uppercase;
			color: ${({ theme }) => theme.colors.gray};
			font-weight: 600;
		}

		p:first-child {
			grid-area: product;
		}
		p:nth-child(2) {
			grid-area: quantity;
		}
		p:last-child {
			grid-area: subtotal;
		}
	}
`

export const SubmitFormContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column-reverse;
	width: 100%;
	padding: 2.1rem 0 0;
	margin-top: auto;
	border-top: 1px solid ${({ theme }) => theme.colors.gray};

	> button {
		width: 100%;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		> button {
			width: auto;
		}
	}
`

export const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-bottom: 1.6rem;
	font-weight: 700;

	h2 {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.colors.gray};
		text-transform: uppercase;
		margin-right: 2.1rem;
	}

	span {
		font-size: 2.4rem;
		color: ${({ theme }) => theme.colors['dark-blue']};
	}

	@media screen and (min-width: 768px) {
		margin-bottom: 0;
	}
`

export const Button = styled(LinkButton)`
	width: 100%;
	@media screen and (min-width: 768px) {
		width: auto;
	}
`
