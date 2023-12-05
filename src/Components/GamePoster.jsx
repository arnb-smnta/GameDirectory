import React from "react";
import { Link } from "react-router-dom";

const GamePoster = ({ game }) => {
  return (
    <div
      className="p-2 m-2 w-[18%] border border-black h-[250px] shadow-lg"
      key={game.id}
    >
      <Link to={`/game?id=${game.id}`}>
        <div className="h-[100%] w-[100%]">
          <div className="absolute  text-white p-4 w-[80%] px-auto pt-[100px] font-extrabold ">
            <h1>{game.name}</h1>
            <h2>Ratings: {game.rating}</h2>
          </div>
          <div className="h-[100%]">
            <img
              src={game.background_image}
              alt={game.name}
              className=" h-[100%] w-[100%]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GamePoster;
