import Carousel from "react-bootstrap/Carousel"
import carrusel1 from '../assets/carrusel1.png'

const Inicioportada = () => {
  return (
    <div className="bg-light">
      <div className="h5 text-center text-danger pt-5 pb-4">COMES LO MISMO PERO PREPARADO DE MANERA DIFERENTE</div>
      <Carousel prevIcon={<i className="bi bi-chevron-left h1 text-danger bg-warning" />}
        nextIcon={<i className="bi bi-chevron-right h1 text-danger bg-warning" />}>
        <Carousel.Item><img src={carrusel1} alt="Carrusel 1" className="w-100" /></Carousel.Item>
        <Carousel.Item><img src={carrusel1} alt="Carrusel 2" className="w-100" /></Carousel.Item>
        <Carousel.Item><img src={carrusel1} alt="Carrusel 3" className="w-100" /></Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Inicioportada