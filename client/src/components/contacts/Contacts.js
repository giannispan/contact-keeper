import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
	// in order to have access to state and actions associated to the context
	const contactContext = useContext(ContactContext);

	// Destructure contactContext object
	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>Please add a contact</h4>
	}

	return (
		<Fragment>
			{contacts !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null ?
						filtered.map(contact => (
							<CSSTransition key = {contact._id} timeout={500} classNames="item">
								<ContactItem contact={contact}/>
							</CSSTransition>
						)) :
						contacts.map(contact => (
							<CSSTransition key = {contact._id} timeout={500} classNames="item">
								<ContactItem contact={contact}/>
							</CSSTransition>
						))}
				</TransitionGroup>
			) : <Spinner />}
		</Fragment>
	)
};

export default Contacts;