const prisma = require('../prisma');
const createMileageService = require('../services/mileage/createMileage.service');

const createMileage = async (req, res) => {
  try {
    const { distance, date } = req.body;

    const mileage = createMileageService(distance, date)

    res.json(mileage)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create mileage' });
  }
};

const getMileageByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const mileage = getMileageByDateService(date);

    res.json(mileage);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve mileage' })
  }
};

const deleteMileageById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format. Please provide a valid Number' })
    }

    await deleteMileageByIdService(id);

    res.json({ message: 'Mileage deleted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete earnings.' });
  }
};

module.exports = {
  createMileage,
  getMileageByDate,
  deleteMileageById,
};
