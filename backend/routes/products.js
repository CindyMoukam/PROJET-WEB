const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const productCtrl = require('../controllers/products');

// To collect all of the users in the db
router.get('/collect', auth, productCtrl.getAllProducts);
// To collect all of the users in the db
router.get('/collect/:id', auth, productCtrl.getOneProduct);
// To add user at the db
router.post('/register', auth, productCtrl.postProduct);
// To update the user information of the db
router.put('/update', auth, productCtrl.putProduct );
// To remove the user at the db
router.delete('/remove/:id', auth, productCtrl.removeProduct);

module.exports = router;