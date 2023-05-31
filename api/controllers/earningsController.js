const prisma = require('../prisma');

const createEarnings = async (req, res) => {
  try {
    const { amount, date } = req.body;

    const earnings = await prisma.earnings.create({
      data: {
        amount,
        date,
      },
    });

    res.json(earnings)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create earnings' });
  }
};

const getEarningsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const earnings = await prisma.earnings.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
    });

    res.json(earnings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve earnings' });
  }
};

module.exports = {
  createEarnings,
  getEarningsByDate,
};
