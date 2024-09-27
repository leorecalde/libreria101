import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
const logout =() =>{
  //quitar del sesion al usuario
  sessionStorage.removeItem('libreria101')
  //resetear el state
  setUsuarioLogueado("")
  //redireccionar al inicio
  navegacion("/")
}

return (
  <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <i className="bi bi-palette fs-3"></i> Libreria101
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink end to="/" className="nav-link">
            Inicio
          </NavLink>
          { usuarioLogueado !== "" ? (
            <>
              <NavLink end to="/administrador" className="nav-link">
                Administrador
              </NavLink>
              <Button variant="link" onClick={logout}>Logout</Button>
            </>
          ) : (
            <NavLink end to="/login" className="nav-link">
              Login
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};

export default Menu;
