import { updateScreeShot } from "../ReduxFunctions/gameSlice";

//import { ScreenShots, id } from "../Constants/constants";
const rawgapikey = import.meta.env.VITE_RAWGAPIKEY;
const screenshotupdate = async (dispatch, id) => {
  const data = await fetch(
    `https://api.rawg.io/api/games/${id}/screenshots?token&key=${rawgapikey}`
  );

  //const data = await fetch(ScreenShots);
  const json = await data.json();
  dispatch(updateScreeShot(json.results));
  console.log("screenshot update");
  console.log(json);
};

export default screenshotupdate;
