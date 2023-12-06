import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: null,
    gamegenre: null,
    gameScreenShots: null,
  },
  reducers: {
    gamesdatabase: (state, action) => {
      state.games = action.payload;
    },
    gamesgenreupdate: (state, action) => {
      state.gamegenre = action.payload;
    },
    updateScreeShot: (state, action) => {
      state.gameScreenShots = action.payload;
    },
  },
});

export const { gamesdatabase, gamesgenreupdate, updateScreeShot } =
  gameSlice.actions;
export default gameSlice.reducer;
