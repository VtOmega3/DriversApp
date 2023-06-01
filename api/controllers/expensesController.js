const prisma = require('../prisma');
const createExpensesService = require('../services/expenses/createExpenses.service');
const deleteExpensesByIdService = require('../services/expenses/deleteExpenses.service');
const getExpensesByDateService = require('../services/expenses/getExpenses.service');

const createExpenses = async (req, res) => {
  try {
    const { amount, date } = req.body;

    const expenses = await createExpensesService(amount, date)

    res.json(expenses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create expenses' });
  }
};

const getExpensesByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const expenses = await getExpensesByDateService(date);

    res.json(expenses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve expenses'});
  }
};

const deleteExpensesById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format. Please provide a valid Number.' });
    }

    await deleteExpensesByIdService(id);

    res.json({ message: 'Expenses deleted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete expenses.' });
  }
};

module.exports = {
  createExpenses,
  getExpensesByDate,
};
