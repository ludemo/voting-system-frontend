import React, { useState } from 'react';
import styles from './Categoria.module.scss';
import eliminar from "assets/img/trash.svg"
import save from "assets/img/save.svg"
function Categoria({ index, categoria, updateCategoria }) {
    const [postulantes, setPostulantes] = useState(categoria.postulantes);
    const [nombre, setNombre] = useState("");
    const [frase, setFrase] = useState("");
    const [logo, setLogo] = useState(null);
    {/*Funciones para actualizar el array de postulantes*/}
    const handleAddPostulante = () => {
        if (nombre.trim() !== "" && frase.trim() !== "" && logo) {
            setPostulantes([...postulantes, { nombre, frase, logo, id: Date.now() }]);
            setNombre("");
            setFrase("");
            setLogo(null);
        }
    };
    const handleRemovePostulante = (id) => {
        const updatedPostulantes = postulantes.filter(postulante => postulante.id !== id);
        setPostulantes(updatedPostulantes);
    };
    const handleLogoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setLogo(URL.createObjectURL(event.target.files[0]));
        }
    };
    {/*Enviar la categoría actualizada al componente padre */}
    const handleSubmit = () => {
        updateCategoria(index, postulantes);
    };

    return (
        <div className={styles.container}>
            <h2>{categoria.nombre}</h2>
            <div className={styles.containerFormPostulante}>
                <div className = {styles.containerInput} >
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        placeholder="Nombre del postulante" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="inputText"
                        />
                </div>
                <div className = {styles.containerInput} >
                    <label>Frase</label>
                    <input 
                        type="text" 
                        placeholder="Frase del postulante" 
                        value={frase}
                        onChange={(e) => setFrase(e.target.value)}
                        className="inputText"
                        />
                </div>
                <div className = {styles.containerInputImage}>
                    <label>Logo</label>
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="inputFile"
                        />
                </div>
            </div>
            <div className ={styles.containerButton}>
                <button className="inputSubmit" onClick={handleAddPostulante}>Agregar Postulante</button>
            </div>
            <div className={styles.containerPostulantes}>
                <div className = {styles.headerRow}>
                    <h5 className={styles.element}>Id</h5>
                    <h5 className={styles.element} style={{ gridColumn: "span 2"}} >Nombre</h5>
                    <h5 className={styles.element}>Logo</h5>
                    <h5 className={styles.element} style={{ gridColumn: "span 4"}} >Frase</h5>
                </div>
                {postulantes.map((postulante, index) => (
                    <div className={styles.postulantesRow} key={index} >
                        <div className={styles.element}>1</div>
                        <div className={styles.element} style={{ gridColumn: "span 2"}}>{postulante.nombre}</div>
                        <div className={styles.element} ><img src={postulante.logo} alt="Logo" className={styles.logoImg} /></div>
                        <div className={styles.element} style={{ gridColumn: "span 4"}} >{postulante.frase}</div>
                        <button className="buttonEliminar"  onClick={() => handleRemovePostulante(postulante.id)} ><img className={styles.img} src={eliminar} alt="eliminar" /></button>
                    </div>
                ))}
            </div>
            <div className ={styles.containerButton}>
                <button className="inputSubmit" onClick={handleSubmit}><img className={styles.img}src={save} alt="" /> Guardar  </button>
            </div>
        </div>
    );
}

export default Categoria;
