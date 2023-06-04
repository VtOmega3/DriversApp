const express = require('express');
const router = express.Router()
const expensesController = require('../controllers/expensesController')

router.post('/', expensesController.createExpenses);
router.get('/:date', expensesController.getExpensesByDate);
router.delete('/:id', expensesController.deleteExpensesById);

module.exports = router;