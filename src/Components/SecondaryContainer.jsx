import React from "react";
import GamePosterList from "./GamePosterList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const gamelist = useSelector((appstore) => appstore.games.games);
  return (
    <div className="relative z-10 mt-[-20%]">
      <GamePosterList gamelist={gamelist} />
    </div>
  );
};

export default SecondaryContainer;
