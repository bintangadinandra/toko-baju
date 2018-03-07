import { apiService } from './api'

const getProduct = () => {
  return apiService.get('/product/ranged')
}

const getMoreProduct = (date) => {
  return apiService.get(`/product/ranged/${date}`)
}

const getSingleProduct = (id) => {
  return apiService.get(`/product/${id}`)
}

export const productService = {
  getProduct,
  getSingleProduct,
  getMoreProduct
}