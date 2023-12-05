import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: null,
    gamegenre: null,
  },
  reducers: {
    gamesdatabase: (state, action) => {
      state.games = action.payload;
    },
    gamesgenreupdate: (state, action) => {
      state.gamegenre = action.payload;
    },
  },
});

export const { gamesdatabase, gamesgenreupdate } = gameSlice.actions;
export default gameSlice.reducer;
