const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/like');

// To collect all of the like in the db
router.get('/user', usersCtrl.getAlllike);
// To add like at the db
router.post('/register', usersCtrl.postlike);
// To update the like of an image of the db
router.put('/update', usersCtrl.putlike );
// To remove the like at  the db
router.delete('/remove', usersCtrl.removelike);

module.exports = router;