import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { Personaje } from "../store/character/slice";
import { useEffect } from "react";
import { GET_PERSONAJES } from "../store/character/thunk";
import { useAppDispatch, useAppSelector } from "../store";
import Paginacion from "../componentes/paginacion/paginacion.componente";

export type TarjetaPersonajeProps = {
  personaje: Personaje;
};
/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
  const dispatch = useAppDispatch();
  const { personajes, url } = useAppSelector((state) => state.character);
  useEffect(() => {
    dispatch(GET_PERSONAJES(url));
  }, []);
  return (
    <div className="container">
      <Paginacion />
      {personajes.map((personaje) => (
        <>
          <h3>{personaje.name}</h3>
          <div className={"detalle"}>
            <div className={"detalle-header"}>
              <img src={personaje.image} alt="Rick Sanchez" />
              <div className={"detalle-header-texto"}>
                <p>{personaje.name}</p>
                <p>Planeta: {personaje.location?.name}</p>
                <p>Genero: {personaje.gender}</p>
              </div>
              <BotonFavorito
                esFavorito={personaje.esFavorito}
                personaje={personaje}
                id={personaje.id}
              />
            </div>
          </div>
          <h4>Lista de episodios donde apareció el personaje</h4>
          <div className={"episodios-grilla"}>
            <TarjetaEpisodio />
            <TarjetaEpisodio />
            <TarjetaEpisodio />
          </div>
        </>
      ))}
    </div>
  );
};

export default PaginaDetalle;
