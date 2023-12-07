import React from "react";
import GamePoster from "./GamePoster";
import { useSelector } from "react-redux";
import appstore from "./ReduxFunctions/appstore";
import { Link } from "react-router-dom";
import screenshotupdate from "./helpers/screenshotupdate";

const GamePosterList = ({ gamelist }) => {
  return (
    <div className="flex flex-wrap border border-black w-[90%] mx-auto mt-4  ">
      {gamelist
        ? gamelist.map((game, index) => {
            return <GamePoster game={game} key={game.id} back />;
          })
        : null}
    </div>
  );
};

export default GamePosterList;
