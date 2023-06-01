const express = require('express');
const router = express.Router()
const summaryController = require('../controllers/summaryController')

router.get('/daily', summaryController.getDailySummary);
router.get('/weekly', summaryController.getWeeklySummary);
router.get('/monthly', summaryController.getMonthlySummary);

module.exports = router;