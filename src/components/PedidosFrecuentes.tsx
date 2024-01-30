import ceviches from '../assets/ceviches.png'
import banderas from '../assets/banderas.png'
import encebollado from '../assets/encebollado.png'
import bollo from '../assets/bollo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import styles from '../styles/PedidosFrecuentes.module.css'
import encebolladosPortada from '../assets/encebolladosPortada.png'
import cevichesPortada from '../assets/cevichesPortada.png'
import banderasPortada from '../assets/banderasPortada.png'
import bollosPortada from '../assets/bollosPortada.png'

const PedidosFrecuentes = () => {
  return (
    <>
      <div className="mt-5 bg-danger">
        <Stack direction='horizontal'>
          <img src={encebolladosPortada} alt="Encebollados Portada" className={`w-25 ${styles.imagenes}`} />
          <img src={cevichesPortada} alt="Ceviches Portada" className={`w-25 ${styles.imagenes}`} />
          <img src={banderasPortada} alt="Banderas Portada" className={`w-25 ${styles.imagenes}`} />
          <img src={bollosPortada} alt="Bollos Portada" className={`w-25 ${styles.imagenes}`} />
        </Stack>
        <div className="h5 text-center text-warning py-5">PEDIDOS FRECUENTES</div>
      </div>
      <Container fluid>
        <Row className='mt-5 row-gap-5'>
          <Col md={3} sm={6}>
            <img src={ceviches} alt="Ceviches" className='w-100' />
            <Stack className={`justify-content-center bg-danger text-light rounded-5 border border-black border-1 ${styles.pedidos}`}>
              <h3 className='text-center'><u>CEVICHES</u></h3>
              <ul className='mx-auto list-unstyled h5'>
                <li><i className='bi bi-check2' /> Concha</li>
                <li><i className='bi bi-check2' /> Camarón</li>
                <li><i className='bi bi-check2' /> Pescado</li>
                <li><i className='bi bi-check2' /> Mixto</li>
              </ul>
            </Stack>
          </Col>
          <Col md={3} sm={6}>
            <img src={banderas} alt="Banderas" className='w-100' />
            <Stack className={`justify-content-center bg-danger text-light rounded-5 border border-black border-1 ${styles.pedidos}`}>
              <h3 className='text-center'><u>BANDERAS</u></h3>
              <ul className='mx-auto list-unstyled h5'>
                <li><i className='bi bi-check2' /> Concha</li>
                <li><i className='bi bi-check2' /> Camarón</li>
                <li><i className='bi bi-check2' /> Pescado curtido</li>
                <li><i className='bi bi-check2' /> Guatita</li>
              </ul>
            </Stack>
          </Col>
          <Col md={3} sm={6}>
            <img src={encebollado} alt="Encebollado" className='w-100' />
            <Stack className={`justify-content-center bg-danger text-light rounded-5 border border-black border-1 ${styles.pedidos}`}>
              <h3 className='text-center'><u>ENCEBOLLADO</u></h3>
              <ul className='mx-auto list-unstyled h4'>
                <li><i className='bi bi-check2' /> Sencillo</li>
                <li><i className='bi bi-check2' /> Mixto</li>
              </ul>
            </Stack>
          </Col>
          <Col md={3} sm={6}>
            <img src={bollo} alt="Bollo" className='w-100' />
            <Stack className={`justify-content-center bg-danger text-light rounded-5 border border-black border-1 ${styles.pedidos}`}>
              <h3 className='text-center'><u>BOLLO</u></h3>
              <ul className='mx-auto list-unstyled h4'>
                <li><i className='bi bi-check2' /> Sencillo</li>
                <li><i className='bi bi-check2' /> Mixto + Porción de arroz</li>
              </ul>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default PedidosFrecuentes