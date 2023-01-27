import { IProduct } from '../types'

export interface IState {
	products: IProduct[]
}

export interface IAction {
	type: string
	payload: IProduct
}
