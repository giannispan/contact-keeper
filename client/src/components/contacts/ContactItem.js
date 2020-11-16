import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = (props) => {

	const contactContext = useContext(ContactContext);

	const onDelete = () => {
		contactContext.deleteContact(props.contact.id);
	}

	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{props.contact.name} {' '} <span style={{ float: 'right' }} className={'badge ' + (props.contact.type === 'professional' ?
				'badge-success' : 'badge-primary')}>{props.contact.type.charAt(0).toUpperCase() + props.contact.type.slice(1)}</span>
			</h3>
			<ul className="list">
				{props.contact.email && (<li>
					<i className="fas fa-envelope-open"/> {props.contact.email}
				</li>)}
				{props.contact.phone && (<li>
					<i className="fas fa-phone"/> {props.contact.phone}
				</li>)}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm">Edit</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
			</p>
		</div>
	)
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired
};

export default ContactItem;