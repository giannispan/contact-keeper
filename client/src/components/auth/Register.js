import React, { useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	useEffect(() => {
		if(authContext.error === 'User already exists') {
			alertContext.setAlert(authContext.error, 'danger');
			authContext.clearErrors();
		}
	}, [authContext.error])

	const [ user, setUser ] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const onChange = e => {
		setUser(({
			...user,
			[e.target.name]: e.target.value
		}))
	};

	const onSubmit = e => {
		e.preventDefault();
		if(user.name === '' || user.email === '' || user.password === '') {
			alertContext.setAlert('Please enter all fields', 'danger');
		} else if (user.password !== user.password2) {
			alertContext.setAlert('Passwords do not match', 'danger')
		} else {
			authContext.register({
				name: user.name,
				email: user.email,
				password: user.password
			})
		}
	}

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={user.name} onChange={onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input type="email" name="email" value={user.email} onChange={onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={user.password} onChange={onChange} minLength="6"/>
				</div>
				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input type="password" name="password2" value={user.password2} onChange={onChange} minLength="6"/>
				</div>
				<input type="submit" value="Register" className="btn btn-primary btn-block"/>
			</form>
		</div>
	)
}

export default Register;