import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from 'components/Admin/Admin';
import Login from 'components/Admin/Login';
import Organizacion from 'components/Admin/Organizacion';
import ListaParticipantes from "components/Admin/Postulantes/ListaParticipantes";
import Votantes from "components/Admin/Votantes";
import Resultados from "components/Admin/Resultados";
import Votacion from "components/Client/Page";
import { AuthProvider } from 'context/AuthContext';
import { PrivateRoutes } from 'utils/PrivateRoutes';
import 'styles/style.scss'
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/votacion" element={<Votacion/>} />
        <Route element={<PrivateRoutes />}>
              <Route path="/admin" exact element ={<Admin/>} >
                <Route path="organizacion" element={<Organizacion/>}/>
                <Route path="postulantes" element={<ListaParticipantes/>}/>
                <Route path="votantes" element={<Votantes/>}/>
                <Route path="resultados" element={<Resultados/>}/>
              </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
