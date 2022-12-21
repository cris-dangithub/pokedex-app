import { createSlice } from "@reduxjs/toolkit";

const configOpen = createSlice({
  name: 'configOpen',
  initialState: false,
  reducers: {
    configOpened: state => true,
    configClosed: state => false
  }
})

export const { configOpened, configClosed } = configOpen.actions
export default configOpen.reducer