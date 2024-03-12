const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/users');

// To collect all of the users in the db
router.get('/user', auth, usersCtrl.getAllUsers);
// To collect all of the users in the db
router.get('/user/:id', auth, usersCtrl.getOneUsers);
// To add user at the db
router.post('/register', auth, usersCtrl.postUser);
// To login the user
router.post('/login', usersCtrl.loginUser);
// To update the user information of the db
router.put('/update', auth, usersCtrl.putUser );
// To remove the user at the db
router.delete('/remove/:id', auth, usersCtrl.removeUser);

module.exports = router;