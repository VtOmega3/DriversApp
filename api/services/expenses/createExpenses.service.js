const prisma = require('../../prisma')

const createExpensesService = async (amount, date) => {
  try {
    const expenses = await prisma.expenses.create({
      data: {
        amount,
        date: new Date(date),
      },
    });

    return expenses;
  } catch (error) {
    throw new Error('Failed to create expenses');
  }
};

module.exports = createExpensesService;