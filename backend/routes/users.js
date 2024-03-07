const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

router.get('/user', usersCtrl.getAllUsers);
router.post('/register', usersCtrl.postUser);

module.exports = router;