const express = require('express');
const router = express.Router();

const dataCtrl = require('../controllers/data');

router.get('/collect', dataCtrl.getProduct );

module.exports = router;