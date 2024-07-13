import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss'
import { useAuth } from 'context/AuthContext';
import admin from 'assets/img/page';
export default function SideBar(){
    const {auth , setAuth} = useAuth();
    const handleLogout = () => {
        setAuth({ token: false, email: "", picture: "" });
        localStorage.removeItem('auth');
      };
    
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className = {styles.logoImg}src={admin.logo} alt="" />
                <h2 className = {styles.textLogo}>Votapp</h2>
            </div>
            <hr style={{width :"80%", opacity:"20%"}}/>
            <ul className={styles.list}>
                <li><NavLink  activeClassName to = "organizacion"><img className ={styles["list-icon"]}src={admin.organizacion} alt="" /> Organizacion</NavLink></li>
                <li><NavLink  activeClassName to = "postulantes"> <img className ={styles["list-icon"]}src={admin.postulantes} alt="" />  Postulantes </NavLink></li>
                <li><NavLink  activeClassName to = "votantes">    <img className ={styles["list-icon"]}src={admin.votantes} alt="" />     Votantes    </NavLink></li>
                <li><NavLink  activeClassName to = "resultados">  <img className ={styles["list-icon"]}src={admin.graficas} alt="" />     Resultados  </NavLink></li>
            </ul>
            <button onClick={handleLogout}>Cerrar Sesión</button>

        </div>
    );
}