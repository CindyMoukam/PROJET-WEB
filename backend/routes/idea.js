const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ideaCtrl = require('../controllers/idea');

// To collect all of the users in the db
router.get('/collect', auth, ideaCtrl.getAllIdea);
// To add user at the db
router.post('/register', auth, ideaCtrl.postIdea);
// To update the user information of the db
router.put('/update', auth, ideaCtrl.putIdea);
// To remove the user at the db
router.delete('/remove', auth, ideaCtrl.removeIdea);

module.exports = router;