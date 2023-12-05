import { useDispatch } from "react-redux";
import { Rawg_URL } from "../Constants/constants";
import { gamesdatabase } from "../ReduxFunctions/gameSlice";
import { gameData } from "../../mocks/mockdata";

export const Api = async (dispatch) => {
  console.log("Api Call");
  //const data = await fetch(Rawg_URL);
  //const json = await data.json();
  /*data
    .then(async (result) => {
      const json = await result.json();
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });*/
  //console.log(json);
  dispatch(gamesdatabase(gameData.results));
};
