const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const productCtrl = require('../controllers/products');

// To collect all of the users in the db
router.get('/collect', productCtrl.getAllProducts);
// To collect all of the users in the db
router.get('/collect/:id', multer, auth, productCtrl.getOneProduct);
// To add user at the db
router.post('/register', multer, productCtrl.postProduct);
// To update the user information of the db
router.put('/update', auth, productCtrl.putProduct );
// To remove the user at the db
router.delete('/remove', productCtrl.removeProduct);

module.exports = router;