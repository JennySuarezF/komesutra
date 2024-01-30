import { useParams } from "react-router-dom";
import comidas from '../../comidas.json'
import DetallesComida from "../components/DetallesComida";
import Acompañamiento from "../components/Acompañamiento";

const DetallesComidapage = () => {
  const { categoria, nombreComida } = useParams();
  const comida = comidas[categoria as keyof typeof comidas].find(c => c.nombre === nombreComida);
  if (!comida) return <div>No se encontró el plato</div>;

  return (
    <>
      <DetallesComida comida={comida} categoria={categoria} />
      <Acompañamiento comidas={comidas} />
    </>
  )
}
export default DetallesComidapage