import * as actions from '../types';

export default (state, action) => {
	switch (action.type) {
		case actions.USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			}
		case actions.REGISTER_SUCCESS:
		case actions.LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			}
		case actions.REGISTER_FAIL:
		case actions.AUTH_ERROR:
		case actions.LOGIN_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload
			}
		case actions.CLEAR_ERRORS:
			return {
				...state,
				error: null
			}
		default:
			return state;
	}
}