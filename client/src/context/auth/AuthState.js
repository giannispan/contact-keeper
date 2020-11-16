import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import * as actions from '../types';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	}

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Load user


	// Register user


	// Login user


	// Logout


	// Clear errors


	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error
			}}>
			{ props.children}
		</AuthContext.Provider>
	)
}

export default AuthState;