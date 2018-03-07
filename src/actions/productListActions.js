import { UPDATE_PRODUCT_LIST, REFRESH_PRODUCT_LIST } from './mutation-types'

export const storeProductList = (data) => {
  return {
    type: UPDATE_PRODUCT_LIST,
    payload: data
  }
}

export const emptyProductList = () => {
  return {
    type: REFRESH_PRODUCT_LIST
  }
}