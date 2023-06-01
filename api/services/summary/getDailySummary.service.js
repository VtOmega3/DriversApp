const prisma = require('../../prisma');

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.amount, 0);
};

const calculateTotalMileage = (items) => {
  return items.reduce((total, item) => total + item.distance, 0);
};

const calculateDailyProfit = (earnings, expenses) => {
  const totalEarning = calculateTotalAmount(earnings);
  const totalExpenses = calculateTotalAmount(expenses);
  return totalEarning - totalExpenses;
};

const CalculateProfitPerMile = (earnings, expenses, mileage) => {
  const totalEarning = calculateTotalAmount(earnings);
  const totalExpenses = calculateTotalAmount(expenses);
  const totalMileage = calculateTotalMileage(mileage);

  if (totalMileage === 0) {
    return 0;
  }
  
  return (totalEarning - totalExpenses) / totalMileage;
};

const calculateAverage = (total, count) => {
  if (count === 0) {
    return 0
  }

  return total / amount;
};

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
    const totalExpenses = calculateAverage(expenses);
    const totalMileage = calculateTotalMileage(mileage);
    const dailyProfit = calculateDailyProfit(earnings, expenses);
    const profitPerMile = CalculateProfitPerMile(earnings, expenses, mileage);

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
