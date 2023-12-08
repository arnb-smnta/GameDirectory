import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import appstore from "./ReduxFunctions/appstore";
import GamepagePoster from "./GamepagePoster";
import { Api } from "./helpers/Api";
import gamevideo from "./helpers/gamevideo";
import GameVideo from "./GameVideo";
const GamePage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const gamedata = useSelector((appstore) => appstore.games.games);
  const videodata = useSelector((appstore) => appstore.games.gamevideo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!gamedata) Api();
    if (!videodata) gamevideo(id, dispatch);
  }, []);
  if (!gamedata) return null;
  const game = gamedata.filter((item) => id.includes(item.id));
  console.log(game);

  return (
    <div className="flex p-4">
      <div className="border border-red-600 p-4 m-4 w-[50%] h-auto bg-black">
        <h1 className="text-red-600 font-extrabold text-9xl text-center ">
          {game[0].name}
        </h1>

        <h2 className="text-center text-yellow-500 font-extrabold text-5xl">
          Ratings {game[0].rating}
        </h2>
        <div className="my-8">
          <h1 className="text-center text-4xl font-bold text-green-600">
            Supported Platforms
          </h1>
          <div className="flex flex-wrap my-4">
            {game[0].platforms.map((p) => (
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <h1 className="font-bold text-2xl m-2 ">{p.platform.name}</h1>
              </button>
            ))}
          </div>

          <div className="mx-4">
            <h1 className="text-4xl font-bold text-amber-800"> # GAME-TAGS </h1>
            <div className="flex flex-wrap">
              {game[0].tags.map((tag) => (
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <h2>{tag.name}</h2>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-black p-4 m-4 bg-black w-[50%]">
        {game[0].short_screenshots.map((shots) => (
          <GamepagePoster shots={shots} key={shots.id} />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
