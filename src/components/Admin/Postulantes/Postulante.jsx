import React from 'react';
import styles from './Postulante.module.scss';

function Postulante({ postulante }) {
    return (
        <div className={styles.container}>
            <h3>{postulante.nombre}</h3>
            {/* Aquí puedes añadir más detalles del postulante como logo y frase */}
            <div>   
                
            </div>
        </div>
    );
}

export default Postulante;
