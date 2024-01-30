import { DetalleComidas } from "../interfaces/GlobalInterfaces"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import { useContext, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"

interface ComidaProps { comida: DetalleComidas, categoria?: string }

const DetallesComida = ({ comida, categoria }: ComidaProps) => {
  const [cantidad, setCantidad] = useState(1);
  const { dispatch } = useContext(CarritoContext)

  const handleClick = () => {
    const arrayCantidad = Array.from({ length: cantidad });
    arrayCantidad.forEach(() => dispatch({ type: 'ADD_ITEM', payload: comida }));
  }

  return (
    <Container fluid className="mt-5 px-5">
      <Row>
        <Col md={6}><img src={comida.img} alt="Comida" className="w-100" /></Col>
        <Col md={6}>
          <h4>
            <Breadcrumb>
              <Breadcrumb.Item linkProps={{ to: '/', className: 'link-danger link-underline-opacity-0 link-underline-opacity-100-hover' }}
                linkAs={Link}>INICIO</Breadcrumb.Item>
              <Breadcrumb.Item linkProps={{ to: '/menu', className: 'link-danger link-underline-opacity-0 link-underline-opacity-100-hover' }}
                linkAs={Link}>MENÚ</Breadcrumb.Item>
              <Breadcrumb.Item active className="text-danger">{categoria?.toUpperCase()}</Breadcrumb.Item>
            </Breadcrumb>
          </h4>
          <h1 className="fw-bold">$ {comida.precio.toFixed(2)}</h1>
          <h4 className="mt-4 fw-bold text-secondary-emphasis">DESCRIPCIÓN</h4>
          <h4 className="mt-4 fw-bold text-secondary-emphasis">{comida.nombre}</h4>
          <h5 className="mt-4">{comida.descripción}</h5>
          <h5 className="mt-4 text-secondary-emphasis"><strong>Ingredientes:</strong> {comida.ingredientes}</h5>
          <hr />
          <h5 className="text-secondary-emphasis"><strong>Categoría:</strong> {categoria}</h5>
          <Form.Label as="h5" htmlFor="cantidad" className="mt-5 fw-bold">Cantidad</Form.Label>
          <Row>
            <Col xs={3} className="d-flex">
              <Form.Control type="number" name="Cantidad" value={cantidad} className="rounded-0 border-black"
                onChange={e => setCantidad(parseInt(e.target.value) || 0)} id="cantidad" />
            </Col>
            <Col xs={3} className="d-grid">
              <Button variant="danger" className="rounded-0" disabled={cantidad < 1}
                onClick={handleClick}>Agregar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default DetallesComida