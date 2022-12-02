import { IProduct } from '../types'
import { api } from './api'

export async function fetchProducts() {
	const products = await api.get<IProduct[]>('/products')
	return products
}
