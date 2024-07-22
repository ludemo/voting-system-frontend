import React, { useState } from 'react';
import Categoria from './Categoria';
import styles from './ListaParticipantes.module.scss';
import save from "assets/img/save.svg"
function ListaParticipantes() {
    const [categorias, setCategorias] = useState([]);
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    {/*Eventos para crear categoría */}
    const handleInputChange = (event) => {
        setNuevaCategoria(event.target.value);
    };

    const addCategoria = () => {
        if (nuevaCategoria.trim() !== "") {
            setCategorias([...categorias, { nombre: nuevaCategoria, postulantes: [] }]);
            setNuevaCategoria(""); // Limpiar el input después de agregar
        }
    };
    {/*Actualizar categoría */}
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
            {/* Formulario para agregar una nueva categoría */}
            <div className={styles.containerFormCategoria}>
                <input 
                    type="text" 
                    placeholder="Nombre de la categoría" 
                    className= "inputText"
                    value={nuevaCategoria}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'Enter' && addCategoria()}
                />
                <button className="inputSubmit" onClick={addCategoria}>Categoría+</button>
            </div>
            {/* Lista de categorías */}
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
            {/* Botón para enviar todo al servidor */}
            <button className="inputSubmit" onClick={handleSubmit}><img className={styles.img}src={save} alt="" /> Actualizar Todo</button>
        </div>
    );
}

export default ListaParticipantes;
