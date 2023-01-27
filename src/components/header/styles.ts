import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.colors.white};
	padding: 2.1rem 1rem;

	h1 {
		font-size: 2rem;
	}
`

export const MyBasket = styled(Link)`
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
	display: flex;
	gap: 1rem;
	align-items: center;
	cursor: pointer;
	padding: 0.4rem 0.6rem;
	border-radius: 0.4rem;
	transition: color 0.2s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.blue};
	}

	> div {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-weight: 600;

		p {
			font-size: 1.4rem;
		}

		span {
			color: ${({ theme }) => theme.colors.gray};
			font-size: 1.2rem;
		}
	}
`
