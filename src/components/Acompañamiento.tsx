import { useState, useContext } from "react";
import { Container, Row, Col, ListGroup, Carousel, Button, Form } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";
import { Comidas, DetalleComidas } from "../interfaces/GlobalInterfaces";

interface AcompañamientoProps { comidas: Comidas }
interface Cantidades { bebidas: number[], adicionales: number[] }

const Acompañamiento = ({ comidas }: AcompañamientoProps) => {
  const [categoriaIndex, setCategoriaIndex] = useState(0);
  const [cantidades, setCantidades] = useState<Cantidades>({
    bebidas: Array(comidas.Bebidas.length).fill(1),
    adicionales: Array(comidas.Adicionales.length).fill(1),
  });
  const { dispatch } = useContext(CarritoContext);

  const handleClick = (adicional: DetalleComidas, index: number) => {
    const cantidad = cantidades[categoriaIndex === 0 ? 'bebidas' : 'adicionales'][index];
    Array.from({ length: cantidad }).forEach(() => dispatch({ type: 'ADD_ITEM', payload: adicional }))
  }

  const handleChange = (type: keyof Cantidades, index: number, value: number) => {
    const newCantidades = { ...cantidades, [type]: [...cantidades[type]] };
    newCantidades[type][index] = value;
    setCantidades(newCantidades);
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={4}>
          <h4 className="fw-bold">ACOMPAÑA TU ORDEN CON:</h4>
          <ListGroup>
            {['BEBIDAS', 'ADICIONALES'].map((categoria, index) => (
              <ListGroup.Item key={index} action active={categoriaIndex === index} variant="light"
                onClick={() => setCategoriaIndex(index)}><h5>{categoria}</h5></ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          <Carousel className="border border-1 border-danger" controls={false} interval={null}
            activeIndex={categoriaIndex} onSelect={setCategoriaIndex}>
            {[comidas.Bebidas, comidas.Adicionales].map((categoria, categoriaIndex) => (
              <Carousel.Item key={categoriaIndex}>
                <Row className="px-5 py-5">
                  {categoria.map((item, index) => (
                    <Col xs={4} key={index}>
                      <img src={item.img} alt="Arroz" className="w-100" />
                      <p>{item.nombre}</p>
                      <p>$ {item.precio.toFixed(2)}</p>
                      <Row>
                        <Col md={4} lg={3} className="px-md-0">
                          <Form.Control type="number" name="Cantidad" className="rounded-0 border-black"
                            value={cantidades[categoriaIndex === 0 ? 'bebidas' : 'adicionales'][index]}
                            onChange={e => handleChange(categoriaIndex === 0 ? 'bebidas' : 'adicionales', index, parseInt(e.target.value, 10) || 0)} />
                        </Col>
                        <Col md={5} className="px-md-0 d-grid">
                          <Button variant="danger" className="rounded-0"
                            onClick={() => handleClick(item, index)}>Agregar</Button>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Acompañamiento;