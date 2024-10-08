import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoApi, leerProductosApi } from "../../../helpers/queris";
import Swal from "sweetalert2";

const ItemProducto = ({producto, fila, setProductos}) => {

  const borrarProducto = async () => {
    // Mostrar el alert de confirmación
    Swal.fire({
      title: "Estás seguro de que quieres borrar este artículo?",
      text: "Luego no podrás revertirlo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Llamar a la API para borrar el producto
        const respuesta = await borrarProductoApi(producto._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto borrado correctamente!",
            text: `El producto ${producto.nombreProducto}, fue eliminado con éxito!`,
            icon: "success",
          });
          const productosActualizados = await leerProductosApi();
          if (productosActualizados.status === 200) {
            const respuestaProductos = await productosActualizados.json();
            setProductos(respuestaProductos);
          }
        } else {
          Swal.fire({
            title: "Ocurrió un error!",
            text: `El producto ${producto.nombreProducto}, no pudo ser eliminado, reintenta en unos minutos.`,
            icon: "error",
          });
        }
      }
    });
  };
  
    
    return (
        <tr>
        <td className="text-center">1</td>
        <td>{producto.nombreProducto}</td>
        <td className="text-end">${producto.precio}</td>
        <td className="text-center">
          <img
            src={producto.imagen}
            className="img-thumbnail"
            alt={producto.nombreProducto}
          ></img>
        </td>
        <td>{producto.categoria}</td>
        <td className="text-center">
          <Link to={`/administrador/editar/${producto._id}`} className="btn btn-warning me-lg-2">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger"  onClick={borrarProducto}>
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;