import { createSlice } from "@reduxjs/toolkit";

const pokePerPage = createSlice({
  name: 'pokePerPage',
  initialState: 12,
  reducers: {
    setPokePerPageGlobal: (state, action) => action.payload
  }
})

export const { setPokePerPageGlobal } = pokePerPage.actions
export default pokePerPage.reducer