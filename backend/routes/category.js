const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/category');

// To collect all of the category in the db
router.get('/user', usersCtrl.getAllcategory);
// To add user at the db
router.post('/register', usersCtrl.postcategory);
// To update the category information of the db
router.put('/update', usersCtrl.putcategory );
// To remove the category at the db
router.delete('/remove', usersCtrl.removecategory);

module.exports = router;