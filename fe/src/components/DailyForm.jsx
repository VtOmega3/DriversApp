import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import API_BASE_URL from '../apiConfig';

const DailyForm = () => {
  const [earningsValue, setEarningsValue] = useState('');
  const [expensesValue, setExpensesValue] = useState('');
  const [mileageValue, setMileageValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleEarningsChange = (event) => {
    setEarningsValue(event.target.value);
  };

  const handleExpenseChange = (event) => {
    setExpensesValue(event.target.value);
  };

  const handleMileageChange = (event) => {
    setMileageValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const submitDailyData = async (data) => {
    try {
      await axios.post(`${API_BASE_URL}/earnings`, {
        amount: data.earnings,
        date: data.date,
      });
  
      await axios.post(`${API_BASE_URL}/expenses`, {
        amount: data.expenses,
        date: data.date,
      });
  
      await axios.post(`${API_BASE_URL}/mileage`, {
        distance: data.mileage,
        date: data.date,
      });
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar os dados.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      earnings: parseFloat(earningsValue),
      expenses: parseFloat(expensesValue),
      mileage: parseFloat(mileageValue),
      date: selectedDate.toISOString(),
    };
    submitDailyData(data);
  };

  return (
    <div>
      <h2>Informe os dados diários:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ganho:
          <input type="number" value={earningsValue} onChange={handleEarningsChange} />
        </label>
        <label>
          Gasto:
          <input type="number" value={expensesValue} onChange={handleExpenseChange} />
        </label>
        <label>
          Quilometragem:
          <input type="number" value={mileageValue} onChange={handleMileageChange} />
        </label>
        <label>
          Data:
          <input type="date" value={format(selectedDate, 'yyyy-MM-dd')} onChange={(e) => handleDateChange(new Date(e.target.value))} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DailyForm;
