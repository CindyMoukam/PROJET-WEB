const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const usersCtrl = require('../controllers/users');

router.get('/user', usersCtrl.getAllUsers);
router.post('/register', usersCtrl.postUser);
router.delete('/remove', usersCtrl.DropUsers);

module.exports = router;