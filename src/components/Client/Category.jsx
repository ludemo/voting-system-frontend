import React, { useState } from 'react';
import PartyCard from './Card';
import styles from './Category.module.scss';

const Category = ({ categoryName, parties, onSelect }) => {
    const [selectedParty, setSelectedParty] = useState(null);
  
    const handleVote = (partyName) => {
      const newSelectedParty = selectedParty === partyName ? null : partyName;
      setSelectedParty(newSelectedParty);
      onSelect(categoryName, newSelectedParty);
    };
  
    return (
      <div className={styles.category}>
        <h2>{categoryName}</h2>
        <div className={styles.partyList}>
          {parties.map((party) => (
            <PartyCard
              key={party.nombre}
              nombre={party.nombre}
              frase={party.frase}
              logo={party.logo}
              votos={party.votos}
              selected={selectedParty === party.nombre}
              onVote={handleVote}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Category;
