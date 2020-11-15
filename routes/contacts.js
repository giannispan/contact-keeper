const express = require('express');
const router = express.Router();

// Get all users contacts
router.get('/', (req, res) => {
	res.send('Get all contacts');
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