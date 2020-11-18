import * as actions from '../types';

export default (state, action) => {
	switch (action.type) {
		case actions.ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload]
			}
		default:
			return state;
	}
}