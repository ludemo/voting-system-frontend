import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ChartComponent = ({ categoria }) => {
  const chartData = categoria.postulantes.map((postulante) => ({
    nombre: postulante.nombre,
    votos: postulante.votos
  }));

  return (
    <div>
      <h2>{categoria.nombre}</h2>
      <ResponsiveContainer  width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="votos" fill="#0077B6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
