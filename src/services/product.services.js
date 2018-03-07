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

const getAllProduct = () => {
  return apiService.get('/product')
}

const createNewProduct = (data) => {
  return apiService.post('/product/create', data)
}

const updateProduct = (data, id) => {
  return apiService.put(`product/${id}`, data)
}

const deleteProduct = (id) => {
  return apiService.delete(`product/${id}`)
}
export const productService = {
  getProduct,
  getSingleProduct,
  getMoreProduct,
  getAllProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
}