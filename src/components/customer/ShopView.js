import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesDashboard = () => {
  // Estado para el mes seleccionado
  const [selectedMonth, setSelectedMonth] = useState('Enero');

  // Reemplaza estos datos con los datos reales de tus ventas
  const data = [
    { name: 'Hoy', ventas: 4000 },
    { name: 'Esta Semana', ventas: 30000 },
    { name: 'Últimos 15 Días', ventas: 60000 },
    { name: 'Este Mes', ventas: 120000 },
  ];

  // Manejador para el cambio de mes
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    // Aquí debes actualizar los datos en base al nuevo mes seleccionado
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>Dashboard de Ventas</h2>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventas" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDashboard;
