import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';

const MonthlyPerformance = () => {
  const [summary, setSummary] = useState(null); // Define o estado 'summary' como null

  useEffect(() => {
    const fetchMonthlySummary = async () => { 
      try {
        // Define os valores para a busca
        const year = 2023; 
        const month = 6; 

        const response = await axios.get(`${API_BASE_URL}/summary/monthly?year=${year}&month=${month}`);

        setSummary(response.data); // Atualiza o estado 'summary' com os dados recebidos da API
      } catch (error) {
        console.error('Failed to fetch monthly summary:', error);
      }
    };

    fetchMonthlySummary();
  }, []);

  if (!summary) {
    return <p>Loading monthly summary...</p>;
  }

  return (
    <div>
      <h2>Relatório Mensal</h2>
      <p>Rendimento Total: {summary.totalEarnings.toFixed(2)}</p>
      <p>Custo Total: {summary.totalExpenses.toFixed(2)}</p>
      <p>Quilometragem Total: {summary.totalMileage.toFixed(2)}</p>
      <p>Rendimento Líquido: {summary.dailyProfit.toFixed(2)}</p>
      <p>Ganhos por KM: {summary.profitPerMile.toFixed(2)}</p>
      <p>Média de ganhos: {summary.averageEarning.toFixed(2)}</p>
      <p>Média de custos: {summary.averageExpenses.toFixed(2)}</p>
      <p>Média de lucro diário: {summary.averageDailyProfit.toFixed(2)}</p>
      <p>Média de KM diário: {summary.averageMileagePerDay.toFixed(2)}</p>
    </div>
  );
};

export default MonthlyPerformance;
