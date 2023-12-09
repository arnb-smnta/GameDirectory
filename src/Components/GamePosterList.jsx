import React, { useEffect } from "react";
import GamePoster from "./GamePoster";
import { useDispatch, useSelector } from "react-redux";
import appstore from "./ReduxFunctions/appstore";
import screenshotupdate from "./helpers/screenshotupdate";

const GamePosterList = ({ gamelist }) => {
  /*const dispact = useDispatch();
  useEffect(() => {
    if (!gamelist[0].background_image) {
      let updatedlist = [];
      for (const i = 0; i < gamelist.length; i++) {
        screenshotupdate(gamelist[i].id, dispact);
        const image = useSelector((appstore) => appstore.games.gameScreenShots);
        updatedlist[i] = { ...gamelist[0], background_image: image };
      }
    }
  }, []);*/

  return (
    <div className="flex flex-wrap  w-[90%] mx-auto mt-4 bg-black ">
      {gamelist
        ? gamelist.map((game, index) => {
            return <GamePoster game={game} key={game.id} back />;
          })
        : null}
    </div>
  );
};

export default GamePosterList;
