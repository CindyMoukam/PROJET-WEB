const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/Event');
const multer = require('../middleware/multer-config');

// To collect all of the events in the db
router.get('/collect', usersCtrl.getAllEvent);
// To add event at the db
router.post('/add', multer, usersCtrl.postEvent);
// To update the event information of the db
router.put('/update', multer, usersCtrl.putEvent );
// To remove the event at  the db
router.delete('/remove', usersCtrl.removeEvent);

module.exports = router;