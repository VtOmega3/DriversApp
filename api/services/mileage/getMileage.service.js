const prisma = require('../../prisma')

const getMileageByDateService = async (date) => {
  try {
    const mileage = await prisma.mileage.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
    });

    return mileage
  } catch (error) {
    throw new Error('Failed to retrieve mileage');
  }
};

module.exports = getMileageByDateService;