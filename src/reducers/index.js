import { combineReducers } from 'redux'
import productDetailReducer from './productDetailReducer'
import productListReducer from './productListReducer'
import uiStateReducer from './uiStateReducer'

export const mainReducer = combineReducers({
  productDetail: productDetailReducer,
  productList: productListReducer,
  uiState: uiStateReducer
})