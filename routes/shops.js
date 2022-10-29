const express = require('express');
const { getAll, create } = require('../controllers/shopsCtrl');
const router = express.Router();

router.get('/', getAll );
router.post('/', create);

module.exports = router;