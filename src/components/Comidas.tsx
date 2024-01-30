import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Pagination from "react-bootstrap/Pagination"
import { DetalleComidas } from "../interfaces/GlobalInterfaces"
import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"

interface ComidasProps {
  categorias: string[],
  active: string,
  setActive: Dispatch<SetStateAction<string>>,
  currentItems: DetalleComidas[],
  getComidasSorted: () => DetalleComidas[],
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const Comidas = ({ categorias, active, setActive, currentItems, getComidasSorted, currentPage, setCurrentPage }: ComidasProps) => {
  const handleCategoriaClick = (categoria: string) => {
    setActive(categoria)
    setCurrentPage(1)
  }

  return (
    <Row className="mt-5">
      <Col md={4}>
        <ListGroup variant="flush">
          {categorias.map(categoria => (
            <ListGroup.Item key={categoria} action active={active === categoria} variant="light"
              onClick={() => handleCategoriaClick(categoria)}><h4>{categoria}</h4></ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={8}>
        <Row className="text-center">
          {currentItems.map((comida, index) => (
            <Col md={6} key={index}>
              <Link to={`/menu/${active}/${comida.nombre}`}>
                <img src={comida.img} alt="Comida" className="w-100" />
              </Link>
              <h5>{comida.nombre}</h5>
              <h5 className="fw-bold">$ {comida.precio.toFixed(2)}</h5>
            </Col>
          ))}
        </Row>
        <Pagination className="mt-5 justify-content-center column-gap-3">
          <Pagination.First onClick={() => setCurrentPage(1)} linkClassName="link-danger rounded-circle" />
          <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}
            linkClassName="link-danger rounded-circle" />
          {Array.from({ length: Math.ceil(getComidasSorted().length / 4) }, (_, i) => (
            <Pagination.Item key={i} active={i + 1 === currentPage} linkClassName="link-danger rounded-circle"
              onClick={() => setCurrentPage(i + 1)}>{i + 1}</Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(getComidasSorted().length / 4)}
            linkClassName="link-danger rounded-circle" />
          <Pagination.Last onClick={() => setCurrentPage(Math.ceil(getComidasSorted().length / 4))}
            linkClassName="link-danger rounded-circle" />
        </Pagination>
      </Col>
    </Row>
  )
}
export default Comidas