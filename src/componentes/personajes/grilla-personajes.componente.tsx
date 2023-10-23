import "./grilla-personajes.css";
import TarjetaPersonaje from './tarjeta-personaje.componente';


import {  useAppSelector } from "../../store";
import { Personaje } from "../../store/character/slice";

type GrillaPersonajesProps = {
  personajesHome: Personaje[];
};

// /**
//  * Grilla de personajes para la pagina de inicio
//  *
//  * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
//  *
//  *
//  * @returns un JSX element
//  */
function GrillaPersonajes({personajesHome}: GrillaPersonajesProps) {
  const {isLoading, error, favorites } = useAppSelector((state) => state.character);
  const favID = favorites.map((fav) => fav.id);
  const personajesFavoritos = personajesHome.map((personaje) => ({
    ...personaje,
    esFavorito: favID.includes(personaje.id),
  }));
  
  return (
    <div className="grilla-personajes">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        personajesFavoritos.map((personaje) => (
          <TarjetaPersonaje personaje={personaje} key={personaje.id} />
        ))
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GrillaPersonajes;
