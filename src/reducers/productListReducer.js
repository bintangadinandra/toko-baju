import { UPDATE_PRODUCT_LIST, REFRESH_PRODUCT_LIST } from '../actions/mutation-types'

const initial_state = {
	data: [],
	crntLastUpdated: ''
}

export default (state = initial_state, action) => {
	switch(action.type){
		case UPDATE_PRODUCT_LIST:
			// console.log('printed from reducer', action.payload.data);
			return action.payload
		case REFRESH_PRODUCT_LIST:
			return initial_state
		default:
			return state
	}
}