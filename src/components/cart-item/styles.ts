import styled from 'styled-components'
import PlusMinusInput from '../plus-minus-input'

export const Container = styled.div`
	display: grid;
	grid-template-areas:
		'img header header trash'
		'img input input subtotal';
	align-items: center;
	grid-template-columns: auto 2fr auto 1fr;
	grid-column-gap: 1.6rem;

	img {
		grid-area: img;
		width: 50%;
		min-width: 8rem;
		max-width: 8.9rem;
	}

	@media screen and (min-width: 768px) {
		grid-template-areas: 'img header input subtotal trash';
		grid-template-columns: auto 1fr 1fr auto 1fr;

		/* justify-items: center; */
		/* align-items: center; */
		/* 		display: flex;
		*/
		justify-content: space-between;
		/* align-items: center; */

		img {
			min-width: 8.9rem;
		}
	}
`

export const Header = styled.div`
	grid-area: header;
	display: flex;
	align-items: center;
	gap: 1.6rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors['dark-blue']};

	@media screen and (min-width: 768px) {
		flex-direction: column;
	}
`

export const Name = styled.span`
	font-size: 1.4rem;
`

export const Price = styled.span`
	font-size: 1.6rem;
	justify-self: center;
`

export const Subtotal = styled.div`
	grid-area: subtotal;
	justify-self: flex-end;
	text-transform: uppercase;
	font-weight: 700;

	text-align: center;

	p {
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.gray};
	}

	span {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.colors['dark-blue']};
	}
`

export const InputCounter = styled(PlusMinusInput)`
	grid-area: input;
`

export const TrashButton = styled.button`
	grid-area: trash;
	width: 2rem;
	height: 2rem;
	justify-self: flex-end;
	background-color: transparent;
`
