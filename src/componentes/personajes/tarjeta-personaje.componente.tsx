import BotonFavorito from '../botones/boton-favorito.componente';
import "./tarjeta-personaje.css";
import { Personaje } from "../../store/character/slice";

export type TarjetaPersonajeProps = {
  personaje: Personaje;
};

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

const TarjetaPersonaje = ({ personaje }: TarjetaPersonajeProps) => {
  return (
    <div className="tarjeta-personaje">
      <img
        src={personaje.image}
        alt={personaje.name}
      />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito esFavorito={false} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
