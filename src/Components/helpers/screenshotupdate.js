//import { ScreenShots, id } from "../Constants/constants";
const rawgapikey = import.meta.env.VITE_RAWGAPIKEY;
const screenshotupdate = async (id) => {
  const data = await fetch(
    `https://api.rawg.io/api/games/${id}/screenshots?token&key=${rawgapikey}`
  );

  //const data = await fetch(ScreenShots);
  const json = await data.json();
  console.log("screenshot");
  const image = await json.results[0].image;
  return image;
};

export default screenshotupdate;
