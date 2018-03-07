import { UPDATE_CURRENT_SELECTED_PRODUCT, DELETE_CURRENT_SELECTED_PRODUCT } from './mutation-types'

export const storeProduct = (data) => {
  return {
    type: UPDATE_CURRENT_SELECTED_PRODUCT,
    payload: data 
  }
}

export const emptyProduct = () => {
  return {
    type: DELETE_CURRENT_SELECTED_PRODUCT
  }
}