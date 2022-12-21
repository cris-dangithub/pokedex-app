import { createSlice } from "@reduxjs/toolkit";

const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState: false,
  reducers: {
    lightMode: state => true,
    darkMode: state => false
  }
})

export const { lightMode, darkMode } = darkmodeSlice.actions
export default darkmodeSlice.reducer