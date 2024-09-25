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
export const crearProductoApi = async(productoNuevo) =>{
    try{
        const respuesta = await fetch(URLProductos, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        return respuesta
    }catch (error){
        console.error(error)
        return false
    }
}