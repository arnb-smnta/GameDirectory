import React from "react";

const MenuItems = ({ genre }) => {
  return (
    <div>
      <div className="w-[12em] border border-black m-2">
        <div className="absolute w-[6em] border border-black">
          <h1 className="font-extrabold text-center">{genre.name}</h1>
        </div>
        <div>
          <img src={genre.image_background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
