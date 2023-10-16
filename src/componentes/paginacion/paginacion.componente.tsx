import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { GET_PAGINACION } from '../../store/pagination/thunk';

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
    const {next,prev} = useAppSelector ((state)=> state.pagination)
    const handleNext = () => {
        dispatch(GET_PAGINACION(next))
        console.log(next)
    }
    const handlePrev = () => {
        dispatch(GET_PAGINACION(prev))
        console.log(prev)
    }
    
    

    return <div className="paginacion">
        <button onClick={handlePrev} className={"primary"}>Anterior</button>
        <button onClick={handleNext} disabled={false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;