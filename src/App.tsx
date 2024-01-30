import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Iniciopage from "./pages/Iniciopage"
import Especialidadespage from "./pages/Especialidadespage"
import Conocenospage from "./pages/Conocenospage"
import Contactanospage from "./pages/Contactanospage"
import Footerbar from "./components/Footerbar"
import Menupage from "./pages/Menupage"
import DetallesComidapage from "./pages/DetallesComidapage"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Iniciopage />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/especialidades" element={<Especialidadespage />} />
        <Route path="/conocenos" element={<Conocenospage />} />
        <Route path="/contactanos" element={<Contactanospage />} />
        <Route path="/menu/:categoria/:nombreComida" element={<DetallesComidapage />} />
      </Routes>
      <Footerbar />
    </BrowserRouter>
  )
}

export default App