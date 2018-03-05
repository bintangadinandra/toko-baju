import { apiService } from './api'

const getProduct = () => {
  return apiService.get('/product')
}

export const productService = {
  getProduct
}