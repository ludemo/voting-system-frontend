import { useState } from "react";
import styles from './Votantes.module.scss';
import eliminar from "assets/img/trash.svg";
import save from "assets/img/save.svg";

export default function Votantes() {
    const [votantes, setVotantes] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [dni,setDNI] = useState("");
    const [correo,setCorreo] = useState("");
    const handleAddVotante = () => {
        if (nombre.trim() !== "" && apellido.trim() !== "" && dni.trim() !== "" && correo.trim() !== "") {
            setVotantes([...votantes, {nombre,apellido,dni,correo, id: Date.now() }]);
            setNombre("");
            setApellido("");
            setDNI("");
            setCorreo("");
        }
    };
    const handleRemoveVotante = (id) => {
        const updatedVotante = votantes.filter(votante => votante.id !== id);
        setVotantes(updatedVotante);
    };
    const handleSubmit = () => {
        //código para actualizar api
    };
    return(
    <div className={styles.container}>
        <h1 className={styles.title}>Lista de participantes</h1>
        <div className={styles.containerFormVotantes}>
            <div className = {styles.containerInput} >
                <label>Nombre</label>
                <input 
                    type="text" 
                    placeholder="Pedro" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="inputText"
                    />
            </div>
            <div className = {styles.containerInput} >
                <label>Apellido</label>
                <input 
                    type="text" 
                    placeholder="zevallos" 
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="inputText"
                    />
            </div>
            <div className = {styles.containerInputImage}>
                <label>DNI</label>
                <input 
                    type="text" 
                    value={dni}
                    placeholder="73686294"
                    onChange={(e) => setDNI(e.target.value)}
                    className="inputText"
                    />
            </div>
            <div className = {styles.containerInputImage}>
                <label>Correo</label>
                <input 
                    type="text" 
                    placeholder="azevallosa@example.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="inputText"
                    />
            </div>
        </div>
        <div className ={styles.containerButton}>
                <button className="inputSubmit" onClick={handleAddVotante}>Agregar Postulante</button>
        </div>
        <div className={styles.containerVotantes}>
                <div className = {styles.headerRow}>
                    <h5 className={styles.element}>Id</h5>
                    <h5 className={styles.element} style={{ gridColumn: "span 2"}} >Nombre</h5>
                    <h5 className={styles.element} style={{ gridColumn: "span 2"}} >Correo</h5>
                    <h5 className={styles.element}>DNI</h5>
                </div>
                {votantes.map((votante, index) => (
                    <div className={styles.votantesRow} key={index} >
                        <div className={styles.element}>1</div>
                        <div className={styles.element} style={{ gridColumn: "span 2"}}>{votante.nombre} {votante.apellido} </div>
                        <div className={styles.element} style={{ gridColumn: "span 2"}} >{votante.correo}</div>
                        <div className={styles.element}  >{votante.dni}</div>
                        <button className="buttonEliminar"  onClick={() => handleRemoveVotante(votante.id)} ><img className={styles.img} src={eliminar} alt="eliminar" /></button>
                    </div>
                ))}
            </div>
            <div className ={styles.containerButton}>
                <button className="inputSubmit" onClick={handleSubmit}><img className={styles.img}src={save} alt="" /> Guardar  </button>
            </div>
    </div>
    )
}