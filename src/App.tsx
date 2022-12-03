import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components'
import { router } from './router'
import Global from './styles/global'
import { dark } from './styles/theme/dark'

function App() {
	return (
		<ThemeProvider theme={dark}>
			<Header />
			<RouterProvider router={router} />
			<Global />
		</ThemeProvider>
	)
}

export default App
