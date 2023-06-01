const prisma = require('../../prisma');

const deleteExpensesByIdService = async (id) => {
  try {
    await prisma.expenses.delete({
      where: {
        id: parseInt(id),

      },
    });
  } catch (error) {
    throw new Error('Failed to delete expenses');
  }
};

module.exports = deleteExpensesByIdService;