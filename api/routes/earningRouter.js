const express = require('express');
const router = express.Router()
const earningsController = require('../controllers/earningsController')

router.post('/', earningsController.createEarnings);
router.get('/:date', earningsController.getEarningsByDate);

module.exports = router;