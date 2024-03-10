const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

// To collect all of the users in the db
router.get('/user', usersCtrl.getAllUsers);
// To collect all of the users in the db
router.get('/user/:id', usersCtrl.getOneUsers);
// To add user at the db
router.post('/register', usersCtrl.postUser);
// To login the user
router.post('/login', usersCtrl.loginUser);
// To update the user information of the db
router.put('/update', usersCtrl.putUser );
// To remove the user at the db
router.delete('/remove/:id', usersCtrl.removeUser);

module.exports = router;