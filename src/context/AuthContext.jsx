
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth',{ token: false, email: "" , picture : ""});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
