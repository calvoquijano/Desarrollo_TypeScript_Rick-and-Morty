import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_PERSONAJES } from "./thunk";

export type Personaje = {
  id: number;
  name?: string;
  image?: string;
  esFavorito: boolean;
};

export type CharacterState = {
  url: string;
  personajes: Personaje[];
  isLoading?: boolean;
  error?: string | null;
  next: string;
  prev: string;
  favorites: Personaje[];
};

const initialState: CharacterState = {
  url: "https://rickandmortyapi.com/api/character/",
  personajes: [],
  isLoading: true,
  error: null,
  next: "",
  prev: "",
  favorites: [],
};

export const characterSlice = createSlice({
  name: "personaje",
  initialState: initialState,
  reducers: {
    ADD_FAVORITE: (state, action: PayloadAction<Personaje>) => {
      const character = action.payload;
      const esFavorito = state.favorites.find(
        (favorite) => favorite.id === character.id
      );
      if (esFavorito) {
        esFavorito.esFavorito = false;
        state.favorites = state.favorites.filter(
          (item) => item.id !== esFavorito.id
        );
      } else {
        state.favorites.push(character);
        character.esFavorito = true;
      }
    },
    RESET_FAVS: (state) => {
      state.favorites = [];
    }
  },
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
      }
    );
    builder.addCase(GET_PERSONAJES.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Error";
    });
    
  },
});

const characterReducer = characterSlice.reducer;
export const { ADD_FAVORITE , RESET_FAVS } = characterSlice.actions;
export default characterReducer;
