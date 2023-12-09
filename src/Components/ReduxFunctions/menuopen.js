import { createSlice } from "@reduxjs/toolkit";

const menuopen = createSlice({
  name: "menu",
  initialState: {
    menuopen: false,
    darkmode: false,
  },
  reducers: {
    isMenuOpen: (state) => {
      state.menuopen = !state.menuopen;
    },
    isDarkmode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { isMenuOpen, isDarkmode } = menuopen.actions;
export default menuopen.reducer;
