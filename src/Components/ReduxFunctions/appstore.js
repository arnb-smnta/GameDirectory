import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import menuReducer from "./menuopen";
import searchreducer from "./searchslice";
const appstore = configureStore({
  reducer: {
    games: gameReducer,
    menu: menuReducer,
    search: searchreducer,
  },
});

export default appstore;
