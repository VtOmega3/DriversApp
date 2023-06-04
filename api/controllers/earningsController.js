const prisma = require('../prisma');
const getEarningsByDateService = require('../services/earnings/getEarnings.service');
const createEarningsService = require('../services/earnings/createEarnings.service')
const deleteEarningsByIdService = require('../services/earnings/deleteEarnings.service');


const createEarnings = async (req, res) => {
  try {
    const { amount, date } = req.body;

    const earnings = await createEarningsService(amount, date)

    res.json(earnings)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create earnings' });
  }
};

const getEarningsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const earnings = await getEarningsByDateService(date);

    res.json(earnings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve earnings' })
  }
}

const deleteEarningsById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format. Please provide a valid Number.' });
    }

    await deleteEarningsByIdService(id);

    res.json({ message: 'Earnings deleted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete earnings.' });
  }
};

module.exports = {
  createEarnings,
  getEarningsByDate,
  deleteEarningsById,
};
