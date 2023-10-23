import "./boton-favorito.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { ADD_FAVORITE, Personaje } from "../../store/character/slice";

export type BotonFavoritoProps = {
  personaje: Personaje;
  esFavorito: boolean;
  id: number;
};

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */

const BotonFavorito = ({ esFavorito, personaje, id }: BotonFavoritoProps) => {
  const dispatch = useAppDispatch();
  const btnAction = () => {
    dispatch(ADD_FAVORITE(personaje));
  };
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={btnAction}  />
    </div>
  );
};

export default BotonFavorito;
