import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import styles from '../styles/FormContacto.module.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const FormContacto = () => {
  return (
    <Container className="mt-5">
      <Form className={`p-5 shadow-sm ${styles.formulario}`}>
        <h5 className="text-center text-danger fw-bold">CONTÁCTANOS</h5>
        <Row>
          <Form.Group as={Col} md={6} className="mt-5" controlId="formGroupNombre">
            <Form.Label className="h5 text-danger fw-bold">Nombre:</Form.Label>
            <Form.Control type="text" placeholder="Escriba su nombre" className="rounded-0 shadow-sm" />
          </Form.Group>
          <Form.Group as={Col} md={6} className="mt-5" controlId="formGroupApellido">
            <Form.Label className="h5 text-danger fw-bold">Apellido:</Form.Label>
            <Form.Control type="text" placeholder="Escriba su apellido" className="rounded-0 shadow-sm" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md={6} className="mt-5" controlId="formGroupCorreo">
            <Form.Label className="h5 text-danger fw-bold">Correo Electrónico:</Form.Label>
            <Form.Control type="email" placeholder="Escriba su correo electrónico" className="rounded-0 shadow-sm" />
          </Form.Group>
          <Form.Group as={Col} md={6} className="mt-5" controlId="formGroupDirección">
            <Form.Label className="h5 text-danger fw-bold">Dirección:</Form.Label>
            <Form.Control type="text" placeholder="Escriba su dirección domiciliaria" className="rounded-0 shadow-sm" />
          </Form.Group>
        </Row>
        <Form.Group className="mt-5" controlId="formGroupTextarea">
          <Form.Label className="h5 text-danger fw-bold">Escriba su mensaje:</Form.Label>
          <Form.Control as="textarea" className="rounded-0 shadow-sm" rows={6} placeholder="Escriba su mensaje" />
        </Form.Group>
        <div className="d-grid">
          <Button className={`mt-5 text-danger rounded-0 border-secondary shadow-sm ${styles.boton}`}
            size="lg" variant="warning">ENVIAR</Button>
        </div>
      </Form>
    </Container>
  )
}
export default FormContacto