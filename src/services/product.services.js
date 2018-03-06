import { apiService } from './api'

const getProduct = () => {
  return apiService.get('/product')
}

const getSingleProduct = (id) => {
  return apiService.get(`/product/${id}`)
}

export const productService = {
  getProduct,
  getSingleProduct
}