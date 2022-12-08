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
		max-width: 44rem;
	}

	h2 {
		text-align: center;
	}
`
