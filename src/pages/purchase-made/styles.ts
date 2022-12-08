import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 0.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3.2rem;
	margin: 2rem;
	padding: 6.4rem 0;

	img {
		width: 100%;
		max-width: 29rem;
	}

	h2 {
		text-align: center;
	}
`

export const LinkButton = styled(Link)`
	text-align: center;
	min-width: 18rem;
	padding: 1.1rem;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.blue};
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 700;
	font-size: 1.2rem;
	border-radius: 0.4rem;
`
