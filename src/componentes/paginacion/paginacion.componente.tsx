import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { GET_PERSONAJES } from '../../store/character/thunk';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch()
    const {next,prev} = useAppSelector ((state)=> state.character)
    const handleNext = () => {
        console.log(GET_PERSONAJES(next))
        dispatch (GET_PERSONAJES(next))
    }
    const handlePrev = () => {
        console.log(prev)
        dispatch (GET_PERSONAJES(prev))
    }
    
    

    return <div className="paginacion">
        <button onClick={handlePrev} disabled={!prev} className={"primary"}>Anterior</button>
        <button onClick={handleNext} disabled={!next} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;