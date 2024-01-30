import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import logo from '../assets/logo.png'
import styles from '../styles/Navigation.module.css'
import { NavLink } from "react-router-dom"
import Carrito from "./Carrito"
import { useContext, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"

const Navigation = () => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const { state } = useContext(CarritoContext)

  return (
    <>
      <Navbar expand="lg" sticky="top" className={styles.navbarColor}>
        <Container fluid className="ps-lg-5">
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="Logo" height={100} width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" children={<i className="bi bi-list h1 text-danger" />} />
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <Nav className="ms-auto fw-bold h5">
              <Nav.Link as={NavLink} to="/menu" className="link-danger">MENÚ</Nav.Link>
              <h3 className="text-danger d-none d-lg-block">|</h3>
              <Nav.Link as={NavLink} to="/especialidades" className="link-danger">ESPECIALIDADES</Nav.Link>
              <h3 className="text-danger d-none d-lg-block">|</h3>
              <Nav.Link as={NavLink} to="/conocenos" className="link-danger">CONÓCENOS</Nav.Link>
              <h3 className="text-danger d-none d-lg-block">|</h3>
              <Nav.Link as={NavLink} to="/contactanos" className="link-danger">CONTÁCTANOS</Nav.Link>
            </Nav>
            <Button variant="danger" className="mx-5 mt-3 mt-lg-0 rounded-circle position-relative"
              onClick={() => setMostrarCarrito(true)} disabled={state.items.length === 0}>
              <i className={`bi bi-cart3 h3 ${styles.cartColor}`} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                {state.items.reduce((total, item) => total + item.cantidad, 0)}</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack direction="horizontal" className="bg-danger justify-content-center text-center text-light">
        <img src='https://i.ibb.co/1mzJZ1R/delivery.png' alt="Repartidor" width={125} height={125} />
        <div className="h6">ENTREGAS A DOMICILIO: SOLO MILAGRO<br />1800-KOMESUTRA</div>
      </Stack>
      {mostrarCarrito && <Carrito mostrarCarrito={mostrarCarrito} setMostrarCarrito={setMostrarCarrito} />}
    </>
  )
}
export default Navigation