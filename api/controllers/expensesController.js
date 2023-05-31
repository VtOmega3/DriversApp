const prisma = require('../prisma');

const createExpenses = async (req, res) => {
  try {
    const { amount, date } = req.body;

    const expenses = await prisma.expenses.create({
      data: {
        amount,
        date,
      },
    });

    res.json(expenses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create expenses' });
  }
};

const getExpensesByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
    });

    res.json(expenses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve expenses'});
  }
};

module.exports = {
  createExpenses,
  getExpensesByDate,
};
