import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import menuReducer from "./menuopen";
const appstore = configureStore({
  reducer: {
    games: gameReducer,
    menu: menuReducer,
  },
});

export default appstore;
