import styled, { css } from 'styled-components'
import { darken } from 'polished'

type ButtonProps = {
	variant: 'default' | 'success'
}

const DefaultVariant = css`
	background-color: ${({ theme }) => theme.colors.blue};

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.blue)};
	}
`
const SuccessVariant = css`
	background-color: ${({ theme }) => theme.colors.green};

	&:hover {
		background-color: ${({ theme }) => darken(0.1, theme.colors.green)};
	}
`

export const Container = styled.button<ButtonProps>`
	min-width: 18rem;
	padding: 1.1rem;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1.2rem;
	border-radius: 0.4rem;
	transition: background-color 0.2s ease;

	${({ variant }) => variant === 'default' && DefaultVariant}
	${({ variant }) => variant === 'success' && SuccessVariant}
`
