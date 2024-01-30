import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const MisionVision = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={7} className="d-flex flex-column align-items-center justify-content-evenly">
          <h4 className="text-danger">MISIÓN</h4>
          <h4>Satisfacer el paladar de nuestros clientes, nos esforzamos para deleitar a cada uno de
            nuestros comensales con platos de mariscos de la mas alta calidad, preparados con pasión y
            creatividad culinaria.</h4>
          <h4 className="text-danger">VISIÓN</h4>
          <h4>Excelencia culinaria: Ser reconocidos a nivel nacional como un destino culinario donde la
            frescura de los ingredientes y la creatividad en la cocina se unen para una experiencia
            única.</h4>
        </Col>
        <Col md={5}>
          <img src="https://i.ibb.co/PxVrSLx/Conocenos.jpg" alt="Conócenos" className="w-100" />
        </Col>
      </Row>
    </Container>
  )
}
export default MisionVision