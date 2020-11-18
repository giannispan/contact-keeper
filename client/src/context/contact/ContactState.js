import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as actions from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [],
		current: null,
		filtered: null,
		error: null
	}

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact
	const addContact = async contact => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/contacts', contact, config);
			dispatch({
				type: actions.ADD_CONTACT,
				payload: res.data
			})
		} catch (err) {
			dispatch({
				type: actions.CONTACT_ERROR,
				payload: err.response.msg
			})
		}

	}

	// Delete contact
	const deleteContact = id => {
		dispatch({
			type: actions.DELETE_CONTACT,
			payload: id
		})
	}

	// Set current contact
	const setCurrent = contact => {
		dispatch({
			type: actions.SET_CURRENT,
			payload: contact
		})
	}

	// Clear current contact
	const clearCurrent = () => {
		dispatch({
			type: actions.CLEAR_CURRENT
		})
	}

	// Update contact
	const updateContact = contact => {
		dispatch({
			type: actions.UPDATE_CONTACT,
			payload: contact
		})
	}

	// Filter contacts
	const filterContacts = text => {
		dispatch({
			type: actions.FILTER_CONTACTS,
			payload: text
		})
	}

	// Clear filter
	const clearFilter = () => {
		dispatch({
			type: actions.CLEAR_FILTER
		})
	}

	return (
		<ContactContext.Provider
		value={{
			contacts: state.contacts,
			current: state.current,
			filtered: state.filtered,
			error: state.error,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact,
			filterContacts,
			clearFilter
		}}>
			{ props.children}
		</ContactContext.Provider>
	)
}

export default ContactState;