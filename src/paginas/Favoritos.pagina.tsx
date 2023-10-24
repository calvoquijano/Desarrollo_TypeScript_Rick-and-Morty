import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useEffect } from "react";
import { GET_PERSONAJES } from "../store/character/thunk";
import { useAppDispatch, useAppSelector } from "../store";
import { RESET_FAVS } from "../store/character/slice";
import Paginacion from "../componentes/paginacion/paginacion.componente";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * @author "Andrés Quijano"
 * @return {array}
 * const resetFavs = () => {
    dispatch(RESET_FAVS());
  }
 */
const PaginaFavoritos = () => {
  const dispatch = useAppDispatch();
  const { favorites, url } = useAppSelector((state) => state.character);
  useEffect(() => {
    dispatch(GET_PERSONAJES(url));
  }, []);
  const resetFavs = () => {
    dispatch(RESET_FAVS());
  }
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button onClick={resetFavs} className="danger">Quitar todos los favoritos</button>
      </div>
      <GrillaPersonajes personajesHome={favorites} />
      <Paginacion />
    </div>
  );
};

export default PaginaFavoritos;
