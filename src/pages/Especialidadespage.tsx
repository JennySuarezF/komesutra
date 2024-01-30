import Container from "react-bootstrap/Container"
import comidas from '../../comidas.json'
import { useState } from "react"
import OrdenarComidas from "../components/OrdenarComidas"
import Comidas from "../components/Comidas"

const Especialidadespage = () => {
  const [active, setActive] = useState('Especialidades')
  const [orden, setOrden] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categorias = [
    'Encebollados', 'Banderas KOME-SUTRA', 'Ceviches', 'Bollos', 'Especialidades', 'Bebidas', 'Adicionales'
  ]

  const getComidasSorted = () => {
    const comidasList = [...comidas[active as keyof typeof comidas]];
    if (orden === 'nombre') {
      comidasList.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === 'precio') {
      comidasList.sort((a, b) => a.precio - b.precio);
    }
    return comidasList;
  };

  const indexOfLastItem = currentPage * 4;
  const indexOfFirstItem = indexOfLastItem - 4;
  const currentItems = getComidasSorted().slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="mt-5">
      <OrdenarComidas currentItems={currentItems} getComidasSorted={getComidasSorted} setOrden={setOrden} />
      <Comidas categorias={categorias} active={active} setActive={setActive} currentItems={currentItems}
        getComidasSorted={getComidasSorted} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
  )
}
export default Especialidadespage