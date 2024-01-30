import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Stack from "react-bootstrap/Stack"

const Testimonios = () => {
  return (
    <>
      <div className="mt-5 bg-danger">
        <div className="h5 text-center text-warning py-5">TESTIMONIOS</div>
      </div>
      <Container>
        <Carousel className="mt-5 py-5 border border-danger text-danger"
          prevIcon={<i className="bi bi-chevron-left bg-warning text-danger fs-1" />}
          nextIcon={<i className="bi bi-chevron-right bg-warning text-danger fs-1" />}>
          <Carousel.Item>
            <p className="text-center">Quiero compartir mi experiencia excepcional en KOMESUTRA con todos
              los amantes de los mariscos! Recientemente tuve la oportunidad de disfrutar de una cena en
              este lugar y estoy completamente impresionado.</p>
            <p className="fs-4 fw-bold text-center">Heidi López</p>
            <Stack direction="horizontal" gap={1} className="fs-5 justify-content-center">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-half" />
            </Stack>
            <div className="mt-3 d-flex justify-content-center">
              <img src="https://demos.devexpress.com/ASPxImageAndDataNavigationDemos/Content/Images/Contacts/Heidi_Lopez.jpg"
                alt="Heidi López" className="border border-5 border-danger rounded-circle" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <p className="text-center">Quiero compartir mi experiencia excepcional en KOMESUTRA con todos
              los amantes de los mariscos! Recientemente tuve la oportunidad de disfrutar de una cena en
              este lugar y estoy completamente impresionado.</p>
            <p className="fs-4 fw-bold text-center">Rafael Raje</p>
            <Stack direction="horizontal" gap={1} className="fs-5 justify-content-center">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-half" />
            </Stack>
            <div className="mt-3 d-flex justify-content-center">
              <img src="https://demos.devexpress.com/ASPxImageAndDataNavigationDemos/Content/Images/Contacts/Rafael_Raje.jpg"
                alt="Rafael Raje" className="border border-5 border-danger rounded-circle" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <p className="text-center">Quiero compartir mi experiencia excepcional en KOMESUTRA con todos
              los amantes de los mariscos! Recientemente tuve la oportunidad de disfrutar de una cena en
              este lugar y estoy completamente impresionado.</p>
            <p className="fs-4 fw-bold text-center">Alfredo Gómez</p>
            <Stack direction="horizontal" gap={1} className="fs-5 justify-content-center">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-half" />
            </Stack>
            <div className="mt-3 d-flex justify-content-center">
              <img src="https://demos.devexpress.com/ASPxImageAndDataNavigationDemos/Content/Images/Contacts/Alfredo_Gomez.jpg"
                alt="Alfredo Gómez" className="border border-5 border-danger rounded-circle" />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}
export default Testimonios