import React, { useReducer } from 'react';
import axios from 'axios';
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
	const loadUser = () => {

	}

	// Register user
	const register = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/users', formData, config);

			dispatch({
				type: actions.REGISTER_SUCCESS,
				payload: res.data
			})
		} catch (err) {
			dispatch({
				type: actions.REGISTER_FAIL,
				payload: err.response.data.msg
			})
		}
	}

	// Login user
	const login = () => {

	}

	// Logout
	const logout = () => {

	}

	// Clear errors
	const clearErrors = () => {
		dispatch({
			type: actions.CLEAR_ERRORS
		})
	}

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors
			}}>
			{ props.children}
		</AuthContext.Provider>
	)
}

export default AuthState;