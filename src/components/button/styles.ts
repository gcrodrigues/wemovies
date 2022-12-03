import styled, { css } from 'styled-components'

type ButtonProps = {
	variant: 'default' | 'success'
}

const DefaultVariant = css`
	background-color: ${({ theme }) => theme.colors.blue};
`
const SuccessVariant = css`
	background-color: ${({ theme }) => theme.colors.green};
`

export const Container = styled.button<ButtonProps>`
	min-width: 18rem;
	padding: 1.1rem;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1.2rem;
	border-radius: 0.4rem;

	${({ variant }) => variant === 'default' && DefaultVariant}
	${({ variant }) => variant === 'success' && SuccessVariant}
`
