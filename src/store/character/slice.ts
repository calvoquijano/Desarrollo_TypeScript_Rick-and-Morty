import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_PERSONAJES} from "./thunk";

export type Personaje = {
  id?: number;
  name?: string;
  image?: string;
  fav?: boolean;
};

export type CharacterState = {
  url: string;
  personajes: Personaje[];
  isLoading?: boolean;
  error?: string | null;
  next: string;
  prev: string;
};

const initialState: CharacterState = {
  url: 'https://rickandmortyapi.com/api/character/',
  personajes: [],
  isLoading: true,
  error: null,
  next: '',
  prev: '',
};

export const characterSlice = createSlice({
  name: "personaje",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GET_PERSONAJES.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      GET_PERSONAJES.fulfilled,
      (state, action: PayloadAction<CharacterState>) => {
        state.personajes = action.payload.personajes;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.isLoading = false;
      },
    );
    builder.addCase(GET_PERSONAJES.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Error';
    });
  },
});

const characterReducer = characterSlice.reducer;
export default characterReducer;