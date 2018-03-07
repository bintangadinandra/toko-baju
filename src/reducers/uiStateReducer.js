import { UPDATE_SCROLL_POSITION, REMOVE_SCROLL_POSITION } from '../actions/mutation-types'

const initial_state = 0

export default (state = initial_state, action) => {
	switch(action.type){
		case UPDATE_SCROLL_POSITION:
			return action.payload
		case REMOVE_SCROLL_POSITION:
			return initial_state
		default:
			return state
	}
}