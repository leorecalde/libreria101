import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    //decidir su logica para validar y dac acceso a las rutas
    const admin = JSON.parse(sessionStorage.getItem('libreria101')) || null;
    //pregunto si no estoy logueado
    if (!admin){
        //no somos adm
        return <Navigate to={'/login'}></Navigate>
    }else{
        // si soy adm
        return children
    }
};

export default RutasProtegidas;