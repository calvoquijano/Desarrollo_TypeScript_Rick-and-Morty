import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import "./grilla-personajes.css";
import { GET_PERSONAJES } from "../../store/character/thunk";
import TarjetaPersonaje from './tarjeta-personaje.componente';


// /**
//  * Grilla de personajes para la pagina de inicio
//  *
//  * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
//  *
//  *
//  * @returns un JSX element
//  */
function GrillaPersonajes() {
  const { personajes, isLoading, error } = useAppSelector((state) => state.character);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_PERSONAJES());
  }, []);
  return (
    <div className="grilla-personajes">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        personajes.map((personaje) => (
          <TarjetaPersonaje personaje={personaje} key={personaje.id} />
        ))
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GrillaPersonajes;
