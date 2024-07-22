import React from 'react';
import data from './data.json'; // Asegúrate de ajustar la ruta según la ubicación del archivo JSON
import ChartComponent from './ChartComponent';

export default function Resultados() {
  return (
    <div>
      <h1>Resultados</h1>
      {data.categorias.map((categoria, index) => (
        <div key={index}>
          <ChartComponent categoria={categoria} />
        </div>
      ))}
    </div>
  );
}
