import React from "react";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="pt-[6em]">
      <div className="absolute  h-[20%] w-[10%]  ml-[90%] mt-[30%] grid grid-flow-row">
        <Link to="/browse">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Browse
          </button>
        </Link>
        <Link to="/gptSearch">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            GPT Search
          </button>
        </Link>
        <Link to="/cart">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Cart
          </button>
        </Link>
      </div>
      <img
        src="public/sean-do-EHLd2utEf68-unsplash.jpg"
        alt=""
        className="bg-cover"
      />
    </div>
  );
};

export default HomePage;
