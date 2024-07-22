import React, { useState } from 'react';
import Categoria from './Categoria';
import styles from './ListaParticipantes.module.scss';

function ListaParticipantes() {
    const [categorias, setCategorias] = useState([]);

    const addCategoria = (nombreCategoria) => {
        setCategorias([...categorias, { nombre: nombreCategoria, postulantes: [] }]);
    };

    const updateCategoria = (index, postulantes) => {
        const nuevasCategorias = [...categorias];
        nuevasCategorias[index].postulantes = postulantes;
        setCategorias(nuevasCategorias);
    };

    const handleSubmit = () => {
        // Lógica para enviar todas las categorías y postulantes al servidor
        console.log(categorias);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de participantes</h1>
            <div className={styles.containerFormCategoria}>
                <input 
                    type="text" 
                    placeholder="Nombre de la categoría" 
                    className = "inputText"
                    onKeyDown={(e) => e.key === 'Enter' && addCategoria(e.target.value)}
                    />
                <button className = "inputSubmit" onClick={() => addCategoria(document.querySelector('input').value)}>Categoría +</button>
            </div>
            
            <div>
                {categorias.map((categoria, index) => (
                    <Categoria 
                        key={index} 
                        index={index} 
                        categoria={categoria} 
                        updateCategoria={updateCategoria}
                    />
                ))}
            </div>
            <button className = "inputSubmit" onClick={handleSubmit}>Actualizar Todo</button>
        </div>
    );
}

export default ListaParticipantes;
