export const URLProductos = import.meta.env.VITE_API_PRODUCTOS;

//si dejo la dejo asi, es una solicitud get, y sirve para mostrar
/*export const crearProducto = async() =>{
    try{
        const respuesta = await fetch(URLProductos)
    }catch (error){
        console.error(error)
    }
}
*/

//solicitudes POST
//uso el export xq la voy a usar desde otro lugar
export const crearProductoApi = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URLProductos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//get
export const leerProductosApi = async () => {
  try {
    const respuesta = await fetch(URLProductos);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//get q devuelve un producto en particular
export const obtenerProductoApi = async (id) => {
  try {
    const respuesta = await fetch(URLProductos+'/'+id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};


//solicitud PUT
export const editarProductoApi = async (productoEditado, id) => {
  try {
    const respuesta = await fetch(URLProductos+'/'+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};


