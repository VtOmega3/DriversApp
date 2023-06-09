const prisma = require('../../prisma');

const {
  calculateTotalAmount,
  calculateTotalMileage,
  calculateDailyProfit,
  calculateProfitPerMile,
  calculateAverage,
} = require('./summaryCalculations');

const getMonthlySummaryService = async (month, year) => {
  try {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const earnings = await prisma.earnings.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const mileage = await prisma.mileage.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const totalEarnings = calculateTotalAmount(earnings);
    const totalExpenses = calculateTotalAmount(expenses);
    const totalMileage = calculateTotalMileage(mileage);
    const dailyProfit = calculateDailyProfit(earnings, expenses);
    const profitPerMile = calculateProfitPerMile(earnings, expenses, mileage);

    const averageEarning = calculateAverage(totalEarnings, earnings.length);
    const averageExpenses = calculateAverage(totalExpenses, expenses.length);
    const averageDailyProfit = calculateAverage(dailyProfit, earnings.length);
    const averageMileagePerDay = calculateAverage(totalMileage, mileage.length);

    return {
      totalEarnings,
      totalExpenses,
      totalMileage,
      dailyProfit,
      profitPerMile,
      averageEarning,
      averageExpenses,
      averageDailyProfit,
      averageMileagePerDay,
    };
  } catch (error) {
    console.log(error)
    throw new Error('Failed to retrieve monthly summary');
  }
};

module.exports = getMonthlySummaryService;
