import "./paginacion.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { GET_PERSONAJES } from "../../store/character/thunk";

/**
 * Componente que contiene los botones para paginar
 * @autor "Andrés Quijano"
 * @return {string} next - url de la página siguiente
 * const handleNext = () => {
    dispatch(GET_PERSONAJES(next));
  };
 * @return {string} prev - url de la página anterior
  const handlePrev = () => {
    dispatch(GET_PERSONAJES(prev));
  };
 */
const Paginacion = () => {
  const dispatch = useAppDispatch();
  const { next, prev } = useAppSelector((state) => state.character);
  const handleNext = () => {
    dispatch(GET_PERSONAJES(next));
  };
  const handlePrev = () => {
    dispatch(GET_PERSONAJES(prev));
  };

  return (
    <div className="paginacion">
      <button onClick={handlePrev} disabled={!prev} className={"primary"}>
        Anterior
      </button>
      <button onClick={handleNext} disabled={!next} className={"primary"}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
