const prisma = require('../../prisma')

const createEarningsService = async (amount, date) => {
  try {
    const earnings = await prisma.earnings.create({
      data: {
        amount,
        date: new Date(date),
      },
    });

    return earnings;
  } catch (error) {
    throw new Error('Failed to create earnings');
  }
};

module.exports = createEarningsService;