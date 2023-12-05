import React from "react";
import { useSelector } from "react-redux";
import appstore from "./ReduxFunctions/appstore";
import MenuItems from "./MenuItems";

const Menu = () => {
  const genredata = useSelector((appstore) => appstore.games.gamegenre);

  if (!genredata) return null;
  return (
    <div className="absolute border border-black w-[30%]  mt-[8em] bg-white z-40 flex flex-wrap ">
      {genredata.map((genre) => (
        <MenuItems genre={genre} />
      ))}
    </div>
  );
};

export default Menu;
