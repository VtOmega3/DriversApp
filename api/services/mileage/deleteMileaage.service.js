const prisma = require('../../prisma');

const deleteMileageByIdService = async (id) => {
  try {
    await prisma.mileage.delete({
      where: {
        id: parseInt(id),

      },
    });
  } catch (error) {
    throw new Error('Failed to delete mileage');
  }
};

module.exports = deleteMileageByIdService;