const express = require('express');
const router = express.Router();

const imageCtrl = require('../controllers/image');

// To collect all of the users in the db
router.get('/collect', imageCtrl.getAllImage);
// To add user at the db
router.post('/register', imageCtrl.postImage);
// To update the user information of the db
router.put('/update', imageCtrl.putImage);
// To remove the user at the db
router.delete('/remove', imageCtrl.removeImage);

module.exports = router;