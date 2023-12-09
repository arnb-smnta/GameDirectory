import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchText } from "./ReduxFunctions/searchslice";

const SearchBar = () => {
  const [searchtext, setsearchtext] = useState("");
  const dispatch = useDispatch();
  const filterlist = (e) => {
    e.preventDefault();
    dispatch(updateSearchText(searchtext));
  };
  return (
    <div>
      <input
        type="text"
        value={searchtext}
        onChange={(e) => setsearchtext(e.target.value)}
        className="rounded-xl mx-4 border border-black pl-4"
        placeholder="Search your favourite games"
      />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={(e) => filterlist(e)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
