import React from "react";
import { useDispatch } from "react-redux";
import { genreData } from "../mocks/mockdata";
import { gamesgenreupdate } from "./ReduxFunctions/gameSlice";
import { isMenuOpen } from "./ReduxFunctions/menuopen";

const MenuButton = () => {
  const dispatch = useDispatch();
  const genre = () => {
    dispatch(gamesgenreupdate(genreData.results));
    dispatch(isMenuOpen());
  };
  return (
    <div className="cursor-pointer">
      <img
        src="public/5584384.png"
        alt="menu icon"
        className="h-12"
        onClick={genre}
      />
    </div>
  );
};

export default MenuButton;
