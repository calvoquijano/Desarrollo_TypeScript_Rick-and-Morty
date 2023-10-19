import { createAsyncThunk } from "@reduxjs/toolkit";
import { CharacterState } from "./slice";
export const GET_PERSONAJES = createAsyncThunk(
  "personaje/GET_PERSONAJES",
  async (url: string): Promise<CharacterState> => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const paginar = {
        url: url,
        favorites: [],
        personajes: data.results,
        next: data.info.next,
        prev: data.info.prev,
      };
      return paginar;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);
