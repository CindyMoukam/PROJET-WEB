const express = require('express');
const router = express.Router();

const imageCtrl = require('../controllers/image');
const multer = require('../middleware/multer-config');

// To collect all of the users in the db
router.get('/collect', imageCtrl.getAllImage);
// To add user at the db
router.post('/register', multer, imageCtrl.postImage);
// To update the user information of the db
router.put('/update',multer, imageCtrl.putImage);
// To remove the user at the db
router.delete('/remove', imageCtrl.removeImage);

module.exports = router;