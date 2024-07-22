import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss'
import logo from "assets/img/logo.png"
export default function Login() {
    const clientID = "247292421789-1324tjmu9mu9b3usslhaj0cjf82ofi6t.apps.googleusercontent.com";
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const allowedEmails = ["azevallosa@unsa.edu.pe","mchurapum@unsa.edu.pe","rvelizs@unsa.edu.pe","allaiquec@unsa.edu.pe"];  // Lista de correos permitidos

    const onSuccess = (credentialResponse) => {
        const userObject = jwtDecode(credentialResponse.credential);
        if (allowedEmails.includes(userObject.email)){
            setAuth({ token: true, email: userObject.email ,picture : userObject.picture});
            navigate("admin") 
         } else {
             setError("Usuario no permitido");
        } 
            
    };

    const onFailure = () => {
        setError("Algo salió mal. Inténtalo de nuevo.");
    };
    return (
    <div className={styles.container}>
        <GoogleOAuthProvider clientId={clientID}>
            <div className={styles['contenedor__login']}>
                <h1>VotApp</h1>
                <img src = {logo} alt="logo"/>
                <p className ={styles['texto__login']}>“Participa con confianza. Tu voz cuenta en cada elección”</p>
                <div className={styles['google__btn']}>
                    <GoogleLogin
                        onSuccess={onSuccess}
                        onError={onFailure}
                        style ={{borderRadius:'15px'}}
                        />
                </div>
                {error && <p className= {styles['container__error']}>{error}</p>}
            </div>
        </GoogleOAuthProvider>
    </div>
    );
}
 
