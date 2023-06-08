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

const calculateProfitPerMile = (earnings, expenses, mileage) => {
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

  return total / count;
};

module.exports = {
  calculateTotalAmount,
  calculateTotalMileage,
  calculateDailyProfit,
  calculateProfitPerMile,
  calculateAverage,
}