import { createSlice } from "@reduxjs/toolkit";

const menuopen = createSlice({
  name: "menu",
  initialState: {
    menuopen: false,
  },
  reducers: {
    isMenuOpen: (state) => {
      state.menuopen = !state.menuopen;
    },
  },
});

export const { isMenuOpen } = menuopen.actions;
export default menuopen.reducer;
