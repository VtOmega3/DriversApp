const prisma = require('../prisma');
const getDailySummaryService = require('../services/summary/getDailySummary.service');
const getWeeklySummaryService = require('../services/summary/getWeeklySummary.service');
const getMonthlySummaryService = require('../services/summary/getMonthlySummary.service');


const getDailySummary = async (req, res) => {
  try {
    const { date } = req.params;

    const summary = await getDailySummaryService(date)

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve daily summary '});
  }
};

const getWeeklySummary = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const summary = await getWeeklySummaryService(startDate, endDate)

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve weekly summary' });
  }
};

const getMonthlySummary = async (req, res) => {
  try {
    const { month, year } = req.query;

    const summary = await getMonthlySummaryService(month, year)

    res.json(summary)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve monthly summary' });
  }
};

module.exports = {
  getDailySummary,
  getWeeklySummary,
  getMonthlySummary,
};
