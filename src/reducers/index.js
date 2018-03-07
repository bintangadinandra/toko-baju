import { combineReducers } from 'redux'
import productDetailReducer from './productDetailReducer'

export const mainReducer = combineReducers({
  productDetail: productDetailReducer
})