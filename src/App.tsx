import { Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";

import { useAppSelector } from "./store";

function App() {
  const { personajes } = useAppSelector((state) => state.character);
  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route
          path="detalle"
          element={personajes.map((personaje) => (
            <PaginaDetalle personaje={personaje} key={personaje.id} />
          ))}
        />
      </Routes>
    </div>
  );
}

export default App;
