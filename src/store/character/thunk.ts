import { createAsyncThunk } from "@reduxjs/toolkit";
import { Personaje, page } from "./slice";
export const GET_PERSONAJES = createAsyncThunk(
  "personaje/GET_PERSONAJES",
  async (): Promise<Personaje[]> => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await res.json();
    return data.results;
  }
);
