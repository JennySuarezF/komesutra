import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"
import { DetalleComidas } from "../interfaces/GlobalInterfaces"
import { Dispatch, SetStateAction } from "react"

interface OrdenarComidasProps {
  currentItems: DetalleComidas[],
  getComidasSorted: () => DetalleComidas[],
  setOrden: Dispatch<SetStateAction<string>>
}

const OrdenarComidas = ({ currentItems, getComidasSorted, setOrden }: OrdenarComidasProps) => {
  return (
    <Row>
      <Col md={4}>
        <h4>
          <Breadcrumb>
            <Breadcrumb.Item linkProps={{ to: '/', className: 'link-danger link-underline-opacity-0 link-underline-opacity-100-hover' }}
              linkAs={Link}>INICIO</Breadcrumb.Item>
            <Breadcrumb.Item active className="text-danger">
              {window.location.href.includes('menu') ? 'MENÚ' : 'ESPECIALIDADES'}
            </Breadcrumb.Item>
          </Breadcrumb>
        </h4>
      </Col>
      <Col md={4} className="text-center">
        <h4>Mostrando {currentItems.length} resultados de {Math.ceil(getComidasSorted().length)}</h4>
      </Col>
      <Col md={4} className="d-flex justify-content-end">
        <Form.Select aria-label="Orden comidas" onChange={e => setOrden(e.target.value)} className="w-75 bg-secondary-subtle text-center text-danger">
          <option>ORDENAR POR:</option>
          <option value="nombre">Nombre</option>
          <option value="precio">Precio</option>
        </Form.Select>
      </Col>
    </Row>
  )
}
export default OrdenarComidas