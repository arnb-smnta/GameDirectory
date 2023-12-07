import React, { useState } from "react";
import { Link } from "react-router-dom";
import screenshotupdate from "./helpers/screenshotupdate";
import { useDispatch, useSelector } from "react-redux";
import appstore from "./ReduxFunctions/appstore";

const GamePoster = ({ game }) => {
  let image = game?.background_image;
  if (!image) image = screenshotupdate(game.id);

  return (
    <div
      className="p-2 m-2 w-[18%] border border-black h-[250px] shadow-lg"
      key={game.id}
    >
      <Link to={`/game?id=${game.id}`}>
        <div className="h-[100%] w-[100%]">
          <div className="h-[100%]">
            <img src={image} alt={game.name} className=" h-[100%] w-[100%]" />
          </div>
          <div className="relative z-10 mt-[-50%] text-white font-extrabold w-[90%] text-center">
            <h1>{game?.name}</h1>
            <h2>Ratings: {game?.rating}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GamePoster;
