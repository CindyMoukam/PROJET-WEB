const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/message');

// To collect all of the message in the db
router.get('/user', usersCtrl.getAllmessage);
// To add message at the db
router.post('/register', usersCtrl.postmessage);
// To update the message information of the db
router.put('/update', usersCtrl.putmessage );
// To remove the message at the db
router.delete('/remove', usersCtrl.removemessage);

module.exports = router;