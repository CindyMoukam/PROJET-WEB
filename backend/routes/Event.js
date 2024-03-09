const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/Event');

// To collect all of the events in the db
router.get('/user', usersCtrl.getAllEvent);
// To add event at the db
router.post('/register', usersCtrl.postEvent);
// To update the event information of the db
router.put('/update', usersCtrl.putEvent );
// To remove the event at  the db
router.delete('/remove', usersCtrl.removeEvent);

module.exports = router;