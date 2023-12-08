import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: { Searchtext: "" },
  reducers: {
    updateSearchText: (state, action) => {
      state.Searchtext = action.payload;
    },
  },
});

export const { updateSearchText } = searchslice.actions;
export default searchslice.reducer;
