import { Outlet , Navigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

export const PrivateRoutes = () => {
    const {auth} = useAuth();
    return(
            auth.token 
                ? <Outlet/> 
                : <Navigate to ="/"/>
    );
}