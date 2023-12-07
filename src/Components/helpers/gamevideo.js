import { updategamevideo } from "../ReduxFunctions/gameSlice";

const rawgapikey = import.meta.env.VITE_RAWGAPIKEY;
const gamevideo = async (id, dispatch) => {
  const data = await fetch(
    `https://api.rawg.io/api/games/${id}/movies?token&key=${rawgapikey}`
  );

  const json = await data.json();
  dispatch(updategamevideo(json.results));
};

export default gamevideo;
