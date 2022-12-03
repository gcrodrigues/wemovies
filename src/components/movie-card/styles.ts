import styled from 'styled-components'
import { Button as ButtonComponent } from '../button'

export const Container = styled.div`
	background-color: ${({ theme: theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.4rem;
	border-radius: 0.4rem;
	padding: 1rem 1.1rem;
`

export const Title = styled.p`
	font-size: 1.2rem;
	color: ${({ theme: theme }) => theme.colors['dark-gray']};
	font-weight: 700;
`

export const Price = styled.p`
	font-size: 1.6rem;
	color: ${({ theme: theme }) => theme.colors['dark-blue']};
	font-weight: 700;
`

export const Button = styled(ButtonComponent)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.2rem;

	> div {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
`
