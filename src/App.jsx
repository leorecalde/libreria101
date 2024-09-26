import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Error404 from "./components/pages/Error404"
import DetalleProducto from "./components/pages/DetalleProducto";
import CardProducto from "./components/pages/product/CardProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login2 from "./components/pages/Login2";

function App() {
  return (
    //el browser es el enrutador, tiene toda la logica para saber en q pagina esta el usuario
    <BrowserRouter>
      {/*siempre espra q agregue las rutas*/}
      {/*el nav debe ir por fuera xq es el componente q siempre se va a repetir*/}
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/administrador/crear"
          element={<FormularioProducto titulo={'Crear Producto'} estoyCreando={true}></FormularioProducto>}
        ></Route>
        <Route
          path="/administrador/editar/:id"
          element={<FormularioProducto titulo={'Editar producto'} estoyCreando={false}></FormularioProducto>}
        ></Route>
        <Route path="/login" element={<Login2></Login2>}></Route>
        {/*el * es un comodin, siempre que ingresen algo q no sea una ruta derivara a esa pagina*/}
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
