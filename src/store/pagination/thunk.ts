import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaginationState } from "./slice";

export const GET_PAGINACION = createAsyncThunk(
  "paginacion/GET_PAGINACION",
  async (arg: string): Promise<PaginationState> => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character/");
      const data = await res.json();
      const paginar = {
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
