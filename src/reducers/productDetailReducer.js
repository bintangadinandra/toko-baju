import { UPDATE_CURRENT_SELECTED_PRODUCT, DELETE_CURRENT_SELECTED_PRODUCT } from '../actions/mutation-types'

const initial_state = {}

export default (state = initial_state, action) => {
	switch(action.type){
		case UPDATE_CURRENT_SELECTED_PRODUCT:
			return action.payload
		case DELETE_CURRENT_SELECTED_PRODUCT:
			return initial_state
		default:
			return state
	}
}