const prisma = require ('../prisma')

const createMileage = async (req, res) => {
  try {
    const { distance, date } = req.body;

    const mileage = await prisma.mileage.create({
      data: {
        distance,
        date,
      },
    });

    res.json(mileage)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mileage' });
  }
};

const getMileageByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const mileage = await prisma.mileage.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
    });

    res.json(mileage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve mileage'})
  }
}

module.exports = {
  createMileage,
  getMileageByDate,
};
