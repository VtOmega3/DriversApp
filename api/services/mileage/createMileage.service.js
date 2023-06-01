const prisma = require('../../prisma')

const createMileageService = async (distance, date) => {
  try {
    const mileage = await prisma.mileage.create({
      data: {
        distance,
        date: new Date(date),
      },
    });

    return mileage
  } catch (error) {
    throw new Error('Failed to create mileage');
  }
};

module.exports = createMileageService;