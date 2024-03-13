const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const imageCtrl = require('../controllers/image');
const multer = require('../middleware/multer-config');

// To collect all of the users in the db
router.get('/collect', auth, imageCtrl.getAllImage);
// To add user at the db
router.post('/register', auth, multer, imageCtrl.postImage);
// To update the user information of the db
router.put('/update', auth, multer, imageCtrl.putImage);
// To remove the user at the db
router.delete('/remove', auth, imageCtrl.removeImage);

module.exports = router;