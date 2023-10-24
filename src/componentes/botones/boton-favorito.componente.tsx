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
 * @author "Andrés Quijano"
 * @param {Personaje} personaje - personaje que se quiere marcar como favorito
 * @return {esFavorito} booleano que indica si el personaje es favorito o no
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
