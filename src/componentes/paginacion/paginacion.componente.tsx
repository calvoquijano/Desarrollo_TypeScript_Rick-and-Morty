import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { GET_PERSONAJES } from '../../store/character/thunk';
import {NEXT_PAGE} from '../../store/character/slice'

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
    const handleNext = () => {
        dispatch(NEXT_PAGE())
        console.log(NEXT_PAGE())
    }
    

    return <div className="paginacion">
        <button disabled={true} className={"primary"}>Anterior</button>
        <button onClick={handleNext} disabled={false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;