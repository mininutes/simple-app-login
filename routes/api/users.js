const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

// @route GET API/profile
// @desc Get Profile
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
});

module.exports = router;