import React from "react";
import ModeButton from "./ModeButton";
import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import AboveHeader from "./AboveHeader";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="h-[6em]  w-[100%] fixed">
      <div className="w-[100%] bg-black h-[2em] ">
        <AboveHeader />
      </div>
      <div className="h-[4em] bg-white flex justify-between pt-3 px-4">
        <MenuButton />

        <h1 className="text-blue-600 font-bold text-4xl">GameStop</h1>
        <div>
          {location.pathname === "/browse" ? (
            <SearchBar />
          ) : (
            <Link to="/browse">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
                Browse
              </button>
            </Link>
          )}
        </div>
        <ModeButton />
      </div>
    </div>
  );
};

export default Header;
