import styled from 'styled-components'

export const Container = styled.div`
	padding: 0 1.6rem 1.6rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1.6rem;
	flex-wrap: wrap;

	@media screen and (min-width: 768px) {
		padding-top: 2.4rem;
	}
`
