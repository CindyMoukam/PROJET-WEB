const express = require('express');
const router = express.Router();

const ideaCtrl = require('../controllers/idea');

// To collect all of the users in the db
router.get('/collect', ideaCtrl.getAllIdea);
// To add user at the db
router.post('/register', ideaCtrl.postIdea);
// To update the user information of the db
router.put('/update', ideaCtrl.putIdea);
// To remove the user at the db
router.delete('/remove', ideaCtrl.removeIdea);

module.exports = router;