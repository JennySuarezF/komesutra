import Row from "react-bootstrap/Row"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import { Link } from "react-router-dom"

const NuestrosDatos = () => {
  return (
    <Container className="mt-5">
      <h4>
        <Breadcrumb>
          <Breadcrumb.Item linkProps={{ to: '/', className: 'link-danger link-underline-opacity-0 link-underline-opacity-100-hover' }}
            linkAs={Link}>INICIO</Breadcrumb.Item>
          <Breadcrumb.Item active className="text-danger">CONTÁCTANOS</Breadcrumb.Item>
        </Breadcrumb>
      </h4>
      <Row className="mt-5">
        <Col md={6} className="text-center">
          <h4 className="text-danger fw-bold">KOMESUTRA</h4>
          <h5 className="pt-5"><strong>Dirección:</strong> Latacunga y Veintimilla<br />
            Diagonal al parqueadero del mercado COLÓN<br />
            <strong>Milagro - Guayas - Ecuador</strong></h5>
          <h5 className="pt-5"><strong>Celular:</strong> 0900000000<br />
            <strong>Email: </strong><a href="mailto:komesutra@gmail.com"
              className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover">
              komesutra@gmail.com</a></h5>
          <h5 className="pt-5"><strong>HORARIOS DE ATENCIÓN: </strong><br />
            Miércoles a Domingo<br />
            Desde las 07h00 hasta las 13h00</h5>
          <Stack direction="horizontal" gap={3} className="pt-5 text-danger justify-content-center">
              <a href="https://www.facebook.com/picanteriaKomeSutra1234?mibextid=ZbWKwL"><i className="bi bi-facebook h1" /></a>
              <a href="https://www.instagram.com/explore/locations/1501601523502277/picanteria-kome-sutra/?next=%2Floo_l112%2F&hl=es"><i className="bi bi-instagram h1" /></a>
              <a href="https://api.whatsapp.com/send?phone=+593 978654034&text=Haz tu pedido"><i className="bi bi-whatsapp h1" /></a>
          </Stack>
        </Col>
        <Col md={6} className="mt-5 mt-md-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0394678088874!2d-79.58989409062153!3d-2.1385481371400763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d47587c20e06b%3A0xd5633dadfd100359!2sPicanteria%20Kome-Sutra!5e0!3m2!1ses-419!2sec!4v1705182963907!5m2!1ses-419!2sec"
            className="w-100" height="500" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </Col>
      </Row>
    </Container>
  )
}
export default NuestrosDatos