// Carrito.tsx
import { Dispatch, SetStateAction, useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { CarritoContext } from '../context/CarritoContext';
import logo from '../assets/logo.png'
import styles from '../styles/Carrito.module.css'

interface CarritoProps { mostrarCarrito: boolean, setMostrarCarrito: Dispatch<SetStateAction<boolean>> }

const Carrito = ({ mostrarCarrito, setMostrarCarrito }: CarritoProps) => {
  const { state, dispatch } = useContext(CarritoContext);

  const calcularTotal = () => {
    return state.items.reduce((total, item) => total + item.comida.precio * item.cantidad, 0).toFixed(2)
  };

  return (
    <Modal show={mostrarCarrito} onHide={() => setMostrarCarrito(false)} size='lg' scrollable>
      <Modal.Header className='d-flex justify-content-center'>
        <img src={logo} alt="Logo" className='text-center' width={100} height={100} />
      </Modal.Header>
      <Modal.Body>
        <Table responsive hover className='text-center'>
          <thead>
            <tr>
              <th />
              <th />
              <th className='fw-bold text-danger'><h5>Cantidad</h5></th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {state.items.map((item, index) => (
              <tr key={index}>
                <td><i className={`bi bi-x-circle h1 text-danger ${styles.cerrar}`}
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.comida.nombre })} /></td>
                <td><img src={item.comida.img} alt="Imagen" width={50} height={50} /></td>
                <td><h5>{item.cantidad}</h5></td>
                <td><h5>{item.comida.nombre}</h5></td>
                <td className='text-end'><h5>$ {item.comida.precio.toFixed(2)}</h5></td>
              </tr>
            ))}
          </tbody>
          <tfoot className='table-warning'>
            <tr>
              <td colSpan={4}><h5 className="fw-bold text-danger">TOTAL A PAGAR</h5></td>
              <td className='text-end'><h5>$ {calcularTotal()}</h5></td>
            </tr>
          </tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setMostrarCarrito(false)}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Carrito;