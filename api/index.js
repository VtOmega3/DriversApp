const express = require('express');
const app = express();
const earningsRoutes = require('./routes/earningRouter');
const expensesRoutes = require('./routes/expensesRouter');
const mileageRoutes = require('./routes/mileageRouter');
const summaryRoutes = require('./routes/summaryRouter');

app.use(express.json())

app.use('/earnings', earningsRoutes);
app.use('/expenses', expensesRoutes);
app.use('/mileage', mileageRoutes);
app.use('/summary', summaryRoutes);

app.listen(3000, ()=> {
  console.log('Server is running on port 3000')
})