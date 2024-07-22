import React from 'react';
import styles from './Card.module.scss';
import logo from 'assets/img/Postulante.png'
const Card = ({ nombre, frase, selected, onVote }) => {
  const handleVoteClick = () => {
    onVote(nombre);
  };

  return (
    <div className={`${styles.card} ${selected ? styles.selected : ''}`}>
      <img
        src={logo}
        alt={`${nombre} logo`}
        className={styles.logo}
      />
      <h3 className={styles.name}>{nombre}</h3>
      <p className={styles.frase}>{frase}</p>
      <button
        className={`${styles.button} ${selected ? styles.selected : ''}`}
        onClick={handleVoteClick}
      >
        {selected ? 'Cancelar elección' : 'Elegir'}
      </button>
    </div>
  );
};

export default Card;
