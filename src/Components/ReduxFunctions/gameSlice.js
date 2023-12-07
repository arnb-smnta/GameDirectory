import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: null,
    gamegenre: null,
    gameScreenShots: null,
    gamevideo: null,
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
    updategamevideo: (state, action) => {
      state.gamevideo = action.payload;
    },
  },
});

export const {
  gamesdatabase,
  gamesgenreupdate,
  updateScreeShot,
  updategamevideo,
} = gameSlice.actions;
export default gameSlice.reducer;
