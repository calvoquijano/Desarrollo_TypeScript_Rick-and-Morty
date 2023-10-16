import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_PAGINACION } from "./thunk";
import { Personaje } from "../character/slice";



export type PaginationState = {
  personajes: Personaje[];
  next: string;
  prev: string;
};

const initialState: PaginationState = {
  personajes: [],
  next: "",
  prev: "",
};

export const paginationSlice = createSlice({
  name: "paginacion",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      GET_PAGINACION.fulfilled,
      (state, action: PayloadAction<PaginationState>) => {
        state.next = action.payload.next;
        state.prev = action.payload.prev;
      }
    );
  },
});

const paginationReducer = paginationSlice.reducer;
export default paginationReducer;
