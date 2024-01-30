import Breadcrumb from "react-bootstrap/Breadcrumb"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

const Historia = () => {
  return (
    <Container className="mt-5">
      <h4>
        <Breadcrumb>
          <Breadcrumb.Item linkProps={{ to: '/', className: 'link-danger link-underline-opacity-0 link-underline-opacity-100-hover' }}
            linkAs={Link}>INICIO</Breadcrumb.Item>
          <Breadcrumb.Item active className="text-danger">CONÓCENOS</Breadcrumb.Item>
        </Breadcrumb>
      </h4>
      <h2 className="text-center text-danger">HISTORIA</h2>
      <h4 className="mt-5">Kome-Sutra abrió sus puertas en el año 2019, y como en todos los comienzos, el
        nuestro también fue difícil, lleno de obstáculos pero que felizmente se lograron vencer. Las primeras
        ventas se hicieron en un pequeño local con apenas un par de mesas y unas cuantas sillas, pero con
        el objetivo firme de convertirnos en la mejor Picantería de nuestra zona</h4>
    </Container>
  )
}
export default Historia