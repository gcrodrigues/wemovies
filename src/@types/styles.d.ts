import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'dark-blue': string
			'dark-gray': string
			white: string
			gray: string
		}
	}
}
