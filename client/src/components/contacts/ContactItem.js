import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = (props) => {
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{props.contact.name} {' '} <span style={{ float: 'right' }} className={'badge ' + (props.contact.type === 'professional' ?
				'badge-success' : 'badge-primary')}>{props.contact.type.charAt(0).toUpperCase() + props.contact.type.slice(1)}</span>
			</h3>
			<ul className="list">
				{props.contact.email && (<li>
					<i className="fas fa-envelope-open"></i> {props.contact.email}
				</li>)}
				{props.contact.phone && (<li>
					<i className="fas fa-phone"></i> {props.contact.phone}
				</li>)}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm">Edit</button>
				<button className="btn btn-danger btn-sm">Delete</button>
			</p>
		</div>
	)
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired
};

export default ContactItem;