import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect } from "react";
import { GET_PERSONAJES } from "../store/character/thunk";
import { useAppDispatch , useAppSelector } from "../store";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */


const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const {personajes, url} = useAppSelector((state) => state.character);
  useEffect(() => {
    dispatch(GET_PERSONAJES(url));
  }, []);
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes personajesHome ={personajes}/>
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
