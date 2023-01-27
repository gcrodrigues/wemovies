import {
	createContext,
	Dispatch,
	PropsWithChildren,
	Reducer,
	useContext,
	useReducer,
} from 'react'
import { cartReducer, initialState } from './reducers'
import { IAction, IState } from './types'

const AppContext = createContext<{
	state: IState
	dispatch: Dispatch<IAction>
}>({
	state: {
		products: [],
	},
	dispatch: () => ({
		products: [],
	}),
})

function AppProvider({ children }: PropsWithChildren) {
	const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
		cartReducer,
		initialState
	)

	const value = { state, dispatch }
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function useCart() {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error('useCount must be used within a AppProvider')
	}
	return context
}

export { AppProvider, useCart }
