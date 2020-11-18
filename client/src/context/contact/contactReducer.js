import * as actions from '../types';

export default (state, action) => {
	switch (action.type) {
		case actions.GET_CONTACTS: {
			return {
				...state,
				contacts: action.payload,
				loading: false
			}
		}
		case actions.ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
				loading: false
			}
		case actions.DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(contact => contact._id !== action.payload),
				loading: false
			}
		case actions.SET_CURRENT:
			return {
				...state,
				current: action.payload
			}
		case actions.CLEAR_CURRENT:
			return {
				...state,
				current: null
			}
		case actions.UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(contact => contact._id === action.payload.id ?
				action.payload : contact),
				loading: false
			}
		case actions.FILTER_CONTACTS:
			return {
				...state,
				filtered: state.contacts.filter(contact => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return contact.name.match(regex) || contact.email.match(regex);
				})
			}
		case actions.CLEAR_FILTER:
			return {
				...state,
				filtered: null
			}
		case actions.CONTACT_ERROR:
			return {
				...state,
				error: action.payload
			}
		case actions.CLEAR_CONTACTS:
			return {
				...state,
				contacts: null,
				filtered: null,
				error: null,
				current: null
			}
		default:
			return state;
	}
}