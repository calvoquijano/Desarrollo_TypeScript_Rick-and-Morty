import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../store';
import { GET_PERSONAJES, GET_PERSONAJES_FILTER } from '../../store/character/thunk';
import './filtros.css';

export type FiltrosProps = {
    name?: string | null,
    setName: (name: string | null  )=> void
    url: string
}

const Filtros = ({name, setName, url}: FiltrosProps) => {
    const reference = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()
    const deleteFilter = () => {
        if (!reference.current) return;
        reference.current.value = "";
        dispatch(GET_PERSONAJES(url));
      };
    const filterByName = () => {
        if (!reference.current) return;
        setName(reference.current.value);
        if (name?.trim === null) {
          reference.current.value = "";
          return;
        }
        console.log(name);
        dispatch(GET_PERSONAJES_FILTER({ name }));
      };
    useEffect(() => {
        if (name === null) {
          deleteFilter();
        }
    }, [name]);
    return (
    <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
          type="text"
          ref={reference}
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          name="nombre"
          onChange={filterByName}
        />
    </div>
    )
}

export default Filtros;