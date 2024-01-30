import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Instrucciones.module.css'
import { Link } from 'react-router-dom'

const Instrucciones = () => {
  return (
    <Container fluid className='mt-5'>
      <Row className='row-gap-5'>
        <Col md={4}>
          <div className={`mx-auto d-flex align-items-center justify-content-center rounded-circle border border-3 border-danger ${styles.circle}`}>
            <Link to="/menu" className='link-dark'><i className='bi bi-hand-index' /></Link>
          </div>
          <div className='h6 mt-3 text-center text-danger'>SELECCIONA TU PEDIDO</div>
        </Col>
        <Col md={4}>
          <div className={`mx-auto d-flex align-items-center justify-content-center rounded-circle border border-3 border-danger ${styles.circle}`}>
            <i className='bi bi-shop' />
          </div>
          <div className='h6 mt-3 text-center text-danger'>RECOGER PEDIDO EN KOMESUTRA</div>
        </Col>
        <Col md={4}>
          <div className={`mx-auto d-flex align-items-center justify-content-center rounded-circle border border-3 border-danger ${styles.circle}`}>
            <img width="100" height="100" src="https://img.icons8.com/ios/100/scooter.png" alt="scooter" />
          </div>
          <div className='h6 mt-3 text-center text-danger'>PEDIDO A DOMICILIO</div>
        </Col>
      </Row>
    </Container>
  )
}
export default Instrucciones