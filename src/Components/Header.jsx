import React from "react";
import ModeButton from "./ModeButton";
import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="h-[8em] bg-gray-400 flex justify-between pt-4 px-4">
      <MenuButton />

      <h1>GameStop</h1>
      <SearchBar />

      <ModeButton />
    </div>
  );
};

export default Header;
