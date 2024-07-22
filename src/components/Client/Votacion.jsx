import React, { useState } from 'react';
import Category from './Category';
import styles from './Votacion.module.scss';

const initialPartyData = {
  categorias: [
    {
      nombre: 'Categoría 1',
      postulantes: [
        { nombre: 'Ricardo espinoza', frase: 'Frase 1-1', logo: 'logo1-1.png', votos: 120 },
        { nombre: 'Postulante 1-2', frase: 'Frase 1-2', logo: 'logo1-2.png', votos: 80 },
        { nombre: 'Postulante 1-3', frase: 'Frase 1-3', logo: 'logo1-3.png', votos: 45 },
      ],
    },
    {
      nombre: 'Categoría 2',
      postulantes: [
        { nombre: 'Postulante 2-1', frase: 'Frase 2-1', logo: 'logo2-1.png', votos: 200 },
        { nombre: 'Postulante 2-2', frase: 'Frase 2-2', logo: 'logo2-2.png', votos: 150 },
        { nombre: 'Postulante 2-3', frase: 'Frase 2-3', logo: 'logo2-3.png', votos: 75 },
      ],
    },
    {
      nombre: 'Categoría 3',
      postulantes: [
        { nombre: 'Postulante 3-1', frase: 'Frase 3-1', logo: 'logo3-1.png', votos: 95 },
        { nombre: 'Postulante 3-2', frase: 'Frase 3-2', logo: 'logo3-2.png', votos: 60 },
        { nombre: 'Postulante 3-3', frase: 'Frase 3-3', logo: 'logo3-3.png', votos: 130 },
      ],
    },
  ],
};

const PartyList = () => {
  const [partyData, setPartyData] = useState(initialPartyData);
  const [selections, setSelections] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (category, party) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [category]: party,
    }));
  };

  const handleVoteSubmit = () => {
    const newPartyData = { ...partyData };

    Object.keys(selections).forEach((category) => {
      const selectedParty = selections[category];
      const categoryData = newPartyData.categorias.find((cat) => cat.nombre === category);
      const partyDataItem = categoryData.postulantes.find((party) => party.nombre === selectedParty);
      if (partyDataItem) {
        partyDataItem.votos += 1;
      }
    });

    setPartyData(newPartyData);
    setShowResults(true);
  };

  return (
    <div className={styles.partyList}>
      {partyData.categorias.map((category) => (
        <Category
          key={category.nombre}
          categoryName={category.nombre}
          parties={category.postulantes}
          onSelect={handleSelect}
        />
      ))}
      <button onClick={handleVoteSubmit} className={styles.voteButton}>
        Votar
      </button>
      {showResults && (
        <div className={styles.results}>
          <h2>Resultados de las votaciones:</h2>
          {Object.keys(selections).map((category) => {
            const selectedParty = selections[category];
            const categoryData = partyData.categorias.find((cat) => cat.nombre === category);
            const partyDataItem = categoryData.postulantes.find((party) => party.nombre === selectedParty);
            return (
              <p key={category}>
                <strong>{category}:</strong> {selectedParty || 'No seleccionado'} - Votos: {partyDataItem ? partyDataItem.votos : 0}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PartyList;
