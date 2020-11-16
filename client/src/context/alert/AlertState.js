import React, { useReducer } from 'react';
import {v4 as uuidV4} from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import * as actions from '../types';

const AlertState = props => {

	const initialState = [

	];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	// Set alert
	const setAlert = (msg, type) => {
		const id = uuidV4();
		dispatch({
			type: actions.SET_ALERT,
			payload: { msg, type, id }
		});

		setTimeout(() => {
			dispatch({
				type: actions.REMOVE_ALERT,
				payload: id
			})
		}, 5000)

	}

	return <AlertContext.Provider
		value={{
			alerts: state,
			setAlert
		}}
	>
		{props.children}
	</AlertContext.Provider>

}

export default AlertState;