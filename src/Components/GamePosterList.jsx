import React from "react";
import GamePoster from "./GamePoster";
import { useSelector } from "react-redux";
import appstore from "./ReduxFunctions/appstore";
import { Link } from "react-router-dom";

const GamePosterList = () => {
  const gamelist = useSelector((appstore) => appstore.games.games);

  return (
    <div className="flex flex-wrap border border-black w-[90%] mx-auto mt-4  ">
      {gamelist
        ? gamelist.map((game) => {
            return <GamePoster game={game} />;
          })
        : null}
    </div>
  );
};

export default GamePosterList;
