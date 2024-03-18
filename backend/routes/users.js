const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/users');

// To collect all of the users in the db
router.get('/collect', usersCtrl.getAllUsers);
// To collect one users in the db
router.get('/user', usersCtrl.getOneUsers);
// To add user at the db
router.post('/register', usersCtrl.postUser);
// To login the user
router.post('/login', usersCtrl.loginUser);
// To update the user information of the db
router.put('/update', auth, usersCtrl.putUser );
// To remove a user at the db
router.delete('/remove', auth, usersCtrl.removeUser);
// To promote the users
router.put('/promote', usersCtrl.promoteUser);
// To promote the users
router.put('/degrade', usersCtrl.degradeUser);

module.exports = router;