const prisma = require('../../prisma');

const {
  calculateTotalAmount,
  calculateTotalMileage,
  calculateDailyProfit,
  calculateProfitPerMile,
  calculateAverage,
} = require('../summaryCalculations');

const getWeeklySummaryService = async (startDate, endDate) => {
  try {
    const getNearestMonday = (date) => {
      const day = date.getDay();
      const diff = (day + 6) % 7; // Calcula a diferença em dias para chegar à segunda-feira
      date.setDate(date.getDate() - diff);
      date.setHours(0, 0, 0, 0);
      return date;
    };
    
    const getNearestSunday = (date) => {
      const day = date.getDay();
      const diff = (7 - day) % 7; // Calcula a diferença em dias para chegar ao domingo
      date.setDate(date.getDate() + diff);
      date.setHours(23, 59, 59, 999);
      return date;
    };

    const monday = getNearestMonday(startDate);
    const sunday = getNearestSunday(endDate);

    const earnings = await prisma.earnings.findMany({
      where: {
        date: {
          gte: monday,
          lte: sunday,
        },
      },
    });

    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          gte: monday,
          lte: sunday,
        },
      },
    });

    const mileage = await prisma.expenses.findMany({
      where: {
        date: {
          gte: monday,
          lte: sunday,
        },
      },
    });

    const totalEarnings = calculateTotalAmount(earnings);
    const totalExpenses = calculateAverage(expenses);
    const totalMileage = calculateTotalMileage(mileage);
    const dailyProfit = calculateDailyProfit(earnings, expenses);
    const profitPerMile = calculateProfitPerMile(earnings, expenses, mileage);

    const averageEarning = calculateAverage(totalEarnings, earnings.length);
    const averageExpenses = calculateAverage(totalExpenses, expenses.length);
    const averageDailyProfit = calculateAverage(dailyProfit, earnings.length);
    const averageProfitPerMile = calculateAverage(profitPerMile, earnings.length);

    return {
      totalEarnings,
      totalExpenses,
      totalMileage,
      dailyProfit,
      profitPerMile,
      averageEarning,
      averageExpenses,
      averageDailyProfit,
      averageProfitPerMile,
    };
  } catch (error) {
    throw new Error('Failed to retrieve weekly summary');
  }
};

module.exports = getWeeklySummaryService;
