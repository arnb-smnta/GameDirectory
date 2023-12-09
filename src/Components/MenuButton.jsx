import React from "react";
import { useDispatch } from "react-redux";
import { genreData } from "../mocks/mockdata";
import { gamesgenreupdate } from "./ReduxFunctions/gameSlice";
import { isMenuOpen } from "./ReduxFunctions/menuopen";
import genreupdate from "./helpers/genreupdate";

const MenuButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="cursor-pointer">
      <img
        src="public/7612954.png"
        alt="menu icon"
        className="h-12"
        onClick={() => genreupdate(dispatch)}
      />
    </div>
  );
};

export default MenuButton;
