const express = require('express');
const router = express.Router();


const thingsCtrl = require('../controllers/things')
/* GET users listing. */
router.get('/new', thingsCtrl.new)

router.get('/', thingsCtrl.index)

module.exports = router;
