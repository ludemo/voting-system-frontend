import SideBar from 'components/Admin/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './Admin.module.scss'
export default function Admin() {
    return (
        <div className={styles.gridContainer}>
            <SideBar />
            <div className={styles.container}>
                <Outlet/>
            </div>
        </div>
    );
}