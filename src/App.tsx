import { ThemeProvider } from 'styled-components'
import { AppProvider } from './context/context'
import { Router } from './router'
import Global from './styles/global'
import { dark } from './styles/theme/dark'

function App() {
	return (
		<AppProvider>
			<ThemeProvider theme={dark}>
				<Router />
				<Global />
			</ThemeProvider>
		</AppProvider>
	)
}

export default App
