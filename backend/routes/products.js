const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products');

// To collect all of the users in the db
router.get('/collect', productCtrl.getAllProducts);
// To collect all of the users in the db
router.get('/collect/:id', productCtrl.getOneProduct);
// To add user at the db
router.post('/register', productCtrl.postProduct);
// To update the user information of the db
router.put('/update', productCtrl.putProduct );
// To remove the user at the db
router.delete('/remove/:id', productCtrl.removeProduct);

module.exports = router;