import React from "react";
import { Link } from "react-router-dom";

const AboveHeader = () => {
  return (
    <div className="ml-[90%] flex">
      <img src="public/user3.png" alt="user icon" className="h-[2em] mx-2" />
      <img
        src="public/4706.png_860.png"
        className="h-[2em] mx-2"
        alt="Questionmark"
      />
      <Link to="/cart">
        <img src="public/Cart.jpg" alt="Cart-icon" className="h-[2em]" />
      </Link>
    </div>
  );
};

export default AboveHeader;
