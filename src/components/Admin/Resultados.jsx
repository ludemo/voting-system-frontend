import React from 'react';
import data from './data.json'; // Asegúrate de ajustar la ruta según la ubicación del archivo JSON
import ChartComponent from './ChartComponent';
import styles from './Chart.module.scss'

export default function Resultados() {
  return (
    <div>
      <h1>Resultados</h1>
      <div className={styles.containerCharts}>
        {data.categorias.map((categoria, index) => (
            <div  className={styles.containerElementChart} key={index}>
            <ChartComponent categoria={categoria} />
            </div>
        ))}
      </div>
    </div>
  );
}
