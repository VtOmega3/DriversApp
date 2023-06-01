const prisma = require('../../prisma')

const getEarningsByDateService = async (date) => {
  try {
    const earnings = await prisma.earnings.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
    });

    return earnings;
  } catch (error) {
    throw new Error('Failed to retrieve earnings');
  }
};

module.exports = getEarningsByDateService;