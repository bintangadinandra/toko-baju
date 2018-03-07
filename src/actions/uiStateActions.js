import { UPDATE_SCROLL_POSITION, REMOVE_SCROLL_POSITION } from './mutation-types'

export const updateScrollPosition = (data) => {
  return {
    type: UPDATE_SCROLL_POSITION,
    payload: data 
  }
}

export const removeScrollPosition = () => {
  return {
    type: REMOVE_SCROLL_POSITION
  }
}