import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	// in order to have access to state and actions associated to the context
	const contactContext = useContext(ContactContext);

	const { contacts } = contactContext;
	return (
		<Fragment>
			{contacts.map(contact => (
				<ContactItem key ={contact.id} contact={contact}/>
			))}
		</Fragment>
	)
};

export default Contacts;