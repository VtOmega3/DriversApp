import React from 'react';
import DailyForm from './components/DailyForm';
import MonthlyPerformance from './components/MonthlyPerformance';

function App() {
  return (
    <div className="app">
      <DailyForm />
      <MonthlyPerformance />
    </div>
  );
}

export default App;
