import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss'
import { useAuth } from 'context/AuthContext';
import admin from 'assets/img/page';
import { useState } from 'react';
export default function SideBar(){
    const {auth , setAuth} = useAuth();
    const [open, setOpen] = useState(false);
    const handleLogout = () => {
        setAuth({ token: false, email: "", picture: "" });
        localStorage.removeItem('auth');
      };
    
    return(
        <div className={`${styles.container} ${!open ? styles.hiddenSideBar : ''}`}>
            <div className={styles.logoContainer}>
                        <img className = {styles.logoImg}src={admin.logo} alt="" />
                        {open&&<h2 className = {styles.text}>Votapp</h2>}
                        <img className = {`${styles.arrow} ${!open ? styles.rotate : ''}`} src = {admin.arrow} alt="" onClick={()=>setOpen(!open)}/>
            </div>
            {/*is setOpen  */}
            <hr style={{width :"80%", opacity:"20%"}}/>
            <ul className={styles.list}>
                <li><NavLink  activeClassName to = "organizacion"> <img className ={ styles["list-icon"]} src={admin.organizacion} alt="" />{open&& <p className ={styles.text}>Organizacion</p>} </NavLink></li>
                <li><NavLink  activeClassName to = "postulantes">  <img className ={ styles["list-icon"]} src={admin.postulantes} alt="" />  {open&&<p className ={styles.text}>Postulantes</p>} </NavLink></li>
                <li><NavLink  activeClassName to = "votantes">     <img className ={ styles["list-icon"]} src={admin.votantes} alt="" />     {open&&<p className ={styles.text}>Votantes   </p>}  </NavLink></li>
                <li><NavLink  activeClassName to = "resultados">   <img className ={ styles["list-icon"]} src={admin.graficas} alt="" />     {open&&<p className ={styles.text}>Resultados </p>} </NavLink></li>
            </ul>
            <button className = {styles.close} onClick={handleLogout}><img className ={ styles["list-icon"]} src={admin.closed} alt="" />  {open&&<p className ={styles.text}>Salir</p>} </button>

        </div>
    );
}