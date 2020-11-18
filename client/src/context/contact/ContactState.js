import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as actions from '../types';

const ContactState = props => {
	const initialState = {
		contacts: null,
		current: null,
		filtered: null,
		error: null
	}

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Get contacts
	const getContacts = async () => {

		try {
			const res = await axios.get('/api/contacts');
			dispatch({
				type: actions.GET_CONTACTS,
				payload: res.data
			})
		} catch (err) {
			dispatch({
				type: actions.CONTACT_ERROR,
				payload: err.response.msg
			})
		}
	}

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
	const deleteContact = async id => {
		try {
			await axios.delete(`/api/contacts/${id}`);
			dispatch({
				type: actions.DELETE_CONTACT,
				payload: id
			})
		} catch (err) {
			dispatch({
				type: actions.CONTACT_ERROR,
				payload: err.response.msg
			})
		}
	}

	// Clear contacts
	const clearContacts = () => {
		dispatch({
			type: actions.CLEAR_CONTACTS
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
			getContacts,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact,
			filterContacts,
			clearFilter,
			clearContacts
		}}>
			{ props.children}
		</ContactContext.Provider>
	)
}

export default ContactState;