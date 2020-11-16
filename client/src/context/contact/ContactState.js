import React, { useReducer } from 'react';
import uuid from 'uuid';
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
		]
	}

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact

	// Delete contact

	// Set current contact

	// Clear current contact

	// Update contact

	// Filter contacts

	// Clear filter

	return (
		<ContactContext.Provider
		value={{
			contacts: state.contacts
		}}>
			{ props.children}
		</ContactContext.Provider>
	)
}

export default ContactState;