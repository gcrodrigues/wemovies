import { IProduct } from '../types'
import { IAction, IState } from './types'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const DECREASE_PRODUCT_AMOUNT = 'DECREASE_PRODUCT_AMOUNT'
export const CHANGE_PRODUCT_AMOUNT = 'CHANGE_PRODUCT_AMOUNT'
export const BUY_PRODUCTS = 'BUY_PRODUCTS'

export const initialState: IState = {
	products: [],
}

export function cartReducer(state: IState, action: IAction): IState {
	const { type, payload } = action

	switch (type) {
		case ADD_PRODUCT:
			return {
				...state,
				products: addProduct(state.products, payload),
			}

		case REMOVE_PRODUCT:
			return {
				...state,
				products: removeProduct(state.products, payload.id),
			}

		case DECREASE_PRODUCT_AMOUNT:
			return {
				...state,
				products: decreaseProductAmount(state.products, payload),
			}

		case CHANGE_PRODUCT_AMOUNT:
			return {
				...state,
				products: changeProductAmount(state.products, payload),
			}
		case BUY_PRODUCTS:
			return { ...state, products: [] }

		default:
			return state
	}
}

export function addProduct(
	products: IProduct[],
	payload: IProduct
): IProduct[] {
	const alreadyExistingProduct = products.find(
		product => product.id === payload.id
	)
	if (alreadyExistingProduct && alreadyExistingProduct.amount) {
		const filteredProducts = products.filter(
			product => product.id !== payload.id
		)
		return [
			...filteredProducts,
			{
				...alreadyExistingProduct,
				amount: alreadyExistingProduct.amount++,
			},
		]
	}

	return [...products, { ...payload, amount: 1 }]
}

export function decreaseProductAmount(
	products: IProduct[],
	payload: IProduct
): IProduct[] {
	const filteredProducts = products.filter(product => product.id !== payload.id)
	if (payload.amount >= 1) {
		return [
			...filteredProducts,
			{
				...payload,
				amount: payload.amount--,
			},
		]
	}

	return filteredProducts
}

export function removeProduct(products: IProduct[], id: number): IProduct[] {
	const filteredCart = products.filter(product => product.id !== id)

	return filteredCart
}

export function changeProductAmount(
	products: IProduct[],
	payload: IProduct
): IProduct[] {
	const productsChanged = products.map(product => {
		if (product.id === payload.id) {
			product.amount = payload.amount
			return product
		}

		return product
	})

	return productsChanged
}

export function buyProducts() {
	return []
}
