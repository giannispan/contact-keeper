import React, { useReducer } from 'react';
import {v4 as uuidV4} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as actions from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Giannis Pan',
				email: 'gpan@email.com',
				phone: '111-111-111-111',
				type: 'personal'
			},
			{
				id: 2,
				name: 'Giorgos Kal',
				email: 'gkal@test.com',
				phone: '222-222-222-222',
				type: 'personal'
			},
			{
				id: 3,
				name: 'Mary Lou',
				email: 'marLou@gmail.com',
				phone: '333-333-333-333',
				type: 'professional'
			}
		],
		current: null,
		filtered: null
	}

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact
	const addContact = contact => {
		contact.id = uuidV4();
		dispatch({
			type: actions.ADD_CONTACT,
			payload: contact
		})
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