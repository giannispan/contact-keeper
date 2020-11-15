const express = require('express');
const router = express.Router();

// Get the logged in user
router.get('/', (req, res) => {
	res.send('Get logged in user');
});

// Authenticate
router.post('/', (req, res) => {
	res.send('Log in user');
});

module.exports = router;