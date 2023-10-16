import "./boton-favorito.css";
export type FavoritosBtn = {
  esFavorito: boolean;
  onClick?: () => void;
};
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */
const BotonFavorito = ({ esFavorito, onClick }: FavoritosBtn) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;