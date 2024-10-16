import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import CardProducto from "./components/pages/product/CardProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login2 from "./components/pages/Login2";
import { useState } from "react";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdmin from "./routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("libreria101")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    //el browser es el enrutador, tiene toda la logica para saber en q pagina esta el usuario
    <BrowserRouter>
      {/*siempre espra q agregue las rutas*/}
      {/*el nav debe ir por fuera xq es el componente q siempre se va a repetir*/}
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Index></Index>}></Route>
        <Route
          exact
          path="/login"
          element={<Login2 setUsuarioLogueado={setUsuarioLogueado}></Login2>}
        ></Route>
        <Route
          exact
          path="/administrador/*"
          element={<RutasProtegidas>
            <RutasAdmin></RutasAdmin>
          </RutasProtegidas>}
        ></Route>
        {/*el * es un comodin, siempre que ingresen algo q no sea una ruta derivara a esa pagina*/}
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
