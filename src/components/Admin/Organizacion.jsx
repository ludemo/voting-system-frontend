import { useDropzone } from 'react-dropzone';
import { useState, useCallback } from 'react';
import styles from './Organizacion.module.scss'
export default function Organizacion() {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        // Aquí puedes manejar los archivos subidos
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);
    const { getRootProps, getInputProps,acceptedFiles } = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    return(
        <div className={styles.container}>
            <h1 className = {styles.title}>Perfil organización</h1>
            <div className={styles.containerForm}>
                <div {...getRootProps({ className: styles.dropzone })}>
                    <input {...getInputProps()} />
                    <div>
                    {files.map(file => (
                        <div key={file.name}>
                            <img src={file.preview} alt="preview" style={{ width: '200px', height: '200px', objectFit: 'cover', marginTop: '20px' }} />
                        </div>
                    ))}
                </div>
                    <p>Arrastra o haz clic para subir una imagen</p>
                </div>
                <div className={styles.textRightInputs}>
                    <div className={styles.inputContainer}>
                        <label htmlFor = "nombreInstitucion" >Nombre</label>
                        <input id="nombreInstitucion"placeholder = "Universidad .." className = "inputText" type = "text"/>
                    </div>
                    <div className={styles.inputContainer} >
                        <label htmlFor = "descripccionInstitucion">Descripcción </label>
                        <textarea id="descripcionInstitucion" placeholder = "Esta institución brinda..." className = "inputText Area" />
                    </div>
                </div>
            </div>
            <input className="inputSubmit" type="submit"/>
        </div>
    )
}