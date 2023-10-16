import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_PERSONAJES} from "./thunk";

export type Personaje = {
  id?: number;
  name?: string;
  image?: string;
  fav?: boolean;
};

export type CharacterState = {
  personajes: Personaje[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CharacterState = {
  personajes: [],
  isLoading: true,
  error: null,
};

export const characterSlice = createSlice({
  name: "personaje",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(GET_PERSONAJES.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      GET_PERSONAJES.fulfilled,
      (state, action: PayloadAction<Personaje[]>) => {
        state.personajes = action.payload;
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
