import React, { useState } from 'react';
import Postulante from './Postulante';
import styles from './Categoria.module.scss';

function Categoria({ index, categoria, updateCategoria }) {
    const [postulantes, setPostulantes] = useState(categoria.postulantes);

    const addPostulante = (postulante) => {
        setPostulantes([...postulantes, postulante]);
    };

    const handleSubmit = () => {
        updateCategoria(index, postulantes);
    };

    return (
        <div className={styles.container}>
            <h2>{categoria.nombre}</h2>
            <input 
                type="text" 
                placeholder="Nombre del postulante" 
                onKeyDown={(e) => e.key === 'Enter' && addPostulante({ nombre: e.target.value, id: Date.now() })}
            />
            <button onClick={() => addPostulante({ nombre: document.querySelector(`input[type="text"]`).value, id: Date.now() })}>Agregar Postulante</button>
            <div>
                {postulantes.map((postulante, index) => (
                    <Postulante key={index} postulante={postulante} />
                ))}
            </div>
            <button onClick={handleSubmit}>Actualizar Postulantes</button>
        </div>
    );
}

export default Categoria;
