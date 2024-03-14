const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/comment');

// To collect all of the comment in the db
router.get('/user', usersCtrl.getAllcomment);
// To add comment at the db
router.post('/register', usersCtrl.postcomment);
// To update the comment information of the db
router.put('/update', usersCtrl.putcomment );
// To remove the comment at  the db
router.delete('/remove', usersCtrl.removecomment);

module.exports = router;