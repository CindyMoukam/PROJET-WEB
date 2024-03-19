const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const notificationCtrl = require('../controllers/notification');

// To collect all of the users in the db
router.get('/collect', auth, notificationCtrl.getAllNotification);
// To collect all of the users in the db
router.get('/collect/:id', auth, notificationCtrl.getOneNotification);
// To add user at the db
router.post('/register', notificationCtrl.postNotification);
// To update the user information of the db
router.put('/update', auth, notificationCtrl.putNotification );
// To remove the user at the db
router.delete('/remove', auth, notificationCtrl.removeNotification);

module.exports = router;