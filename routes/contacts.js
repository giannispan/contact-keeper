const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// Get all users contacts
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(contacts)
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Add contact
router.post('/', (req, res) => {
	res.send('Add a contact');
});

// Update contact
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// Delete contact
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;