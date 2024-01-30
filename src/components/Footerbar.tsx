import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import logo from '../assets/logo.png'

const Footerbar = () => {
  return (
    <footer className="mt-5 py-4 text-danger">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img src={logo} alt="Logo" width={150} height={150} />
            <h5 className="mt-5">© Copyright KOMESUTRA</h5>
          </Col>
          <Col md={4} className="text-center">
            <h5><strong>Dirección:</strong> Latacunga y Veintimilla<br />
              <strong>Referencia:</strong> Diagonal al parqueadero del mercado COLÓN</h5>
            <h5 className="pt-3">Milagro - Guayas - Ecuador</h5>
            <h5 className="pt-5"><strong>Celular:</strong> 0978654034<br />
              <strong>Email: </strong><a href="mailto:komesutra@gmail.com"
                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover">
                komesutra@gmail.com</a></h5>
          </Col>
          <Col md={4} className="mt-5 mt-md-0 d-flex flex-column align-items-center justify-content-around text-center">
            <h5><strong>HORARIOS DE ATENCIÓN: </strong><br />
              Miércoles a Domingo<br />
              Desde las 07h00 hasta las 13h00</h5>
            <Stack direction="horizontal" gap={3} className="justify-content-center">
              <a href="https://www.facebook.com/picanteriaKomeSutra1234?mibextid=ZbWKwL"><i className="bi bi-facebook h1" /></a>
              <a href="https://www.instagram.com/explore/locations/1501601523502277/picanteria-kome-sutra/?next=%2Floo_l112%2F&hl=es"><i className="bi bi-instagram h1" /></a>
              <a href="https://api.whatsapp.com/send?phone=+593 978654034&text=Haz tu pedido"><i className="bi bi-whatsapp h1" /></a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footerbar