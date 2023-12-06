import { genreData } from "../../mocks/mockdata";
import { gamesgenreupdate } from "../ReduxFunctions/gameSlice";
import { isMenuOpen } from "../ReduxFunctions/menuopen";

const genreupdate = (dispatch) => {
  dispatch(gamesgenreupdate(genreData.results));
  dispatch(isMenuOpen());
  console.log("genreupdate");
};

export default genreupdate;
