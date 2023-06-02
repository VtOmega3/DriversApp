const prisma = require('../../prisma');

const {
  calculateTotalAmount,
  calculateTotalMileage,
  calculateDailyProfit,
  calculateProfitPerMile,
  calculateAverage,
} = require('./summaryCalculations');

const getDailySummaryService = async (date) => {
  try {
    const earnings = await prisma.earnings.findMany({
      where: {
        date: {
          equals: new Date(date)
        },
      },
    });

    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          equals: new Date(date)
        },
      },
    });

    const mileage = await prisma.mileage.findMany({
      where: {
        date: {
          equals: new Date(date)
        },
      },
    });

    const totalEarnings = calculateTotalAmount(earnings);
    const totalExpenses = calculateAverage(expenses.length, calculateTotalAmount(expenses));
    const totalMileage = calculateTotalMileage(mileage);
    const dailyProfit = calculateDailyProfit(earnings, expenses);
    const profitPerMile = calculateProfitPerMile(earnings, expenses, mileage);

    return {
      totalEarnings,
      totalExpenses,
      totalMileage,
      dailyProfit,
      profitPerMile,
    };
  } catch (error) {
    throw new Error('Failed to retrieve daily summary');
  }
};

module.exports = getDailySummaryService;
