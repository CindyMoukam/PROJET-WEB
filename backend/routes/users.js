const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

// To collect all of the users in the db
router.get('/user', usersCtrl.getAllUsers);
// To add user at the db
router.post('/register', usersCtrl.postUser);
// To update the user information of the db
router.put('/update', usersCtrl.putUser );
// To remove the user at the db
router.delete('/remove', usersCtrl.removeUser);

module.exports = router;