import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}

	html {
		font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
		font-size: 62.5%;
	}
	
	html, body, #root {
		height: 100%;
	}
	
	body {
		font-size: 1.2rem;
		background-color: ${({ theme }) => theme && theme.colors['dark-blue']};
	}

	#root {
		max-width: 960px;
		margin: 0 auto;
	}

	button {
		cursor: pointer;
	}

	input[type=number]::-webkit-inner-spin-button, 
	input[type=number]::-webkit-outer-spin-button { 
		-webkit-appearance: none; 
	}

	input[type=number] {
		-moz-appearance: textfield;
	}
	
	@media screen and (min-width: 768px) {		
		body {
			font-size: 1.6rem;
		}
	}
`
