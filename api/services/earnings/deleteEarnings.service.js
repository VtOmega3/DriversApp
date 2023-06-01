const prisma = require('../../prisma');

const deleteEarningsByIdService = async (id) => {
  try {
    await prisma.earnings.delete({
      where: {
        id: parseInt(id),

      },
    });
  } catch (error) {
    throw new Error('Failed to delete earnings');
  }
};

module.exports = deleteEarningsByIdService;