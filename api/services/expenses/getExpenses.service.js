const prisma = require('../../prisma')

const getExpensesByDateService = async (date) => {
  try {
    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
    });

    return expenses;
  } catch (error) {
    throw new Error('Failed to retrieve expenses');
  }
};

module.exports = getExpensesByDateService;