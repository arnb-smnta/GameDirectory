import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Api } from "./helpers/Api";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import appstore from "./ReduxFunctions/appstore";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Api(dispatch);
  }, []);
  const menuoptions = useSelector((appstore) => appstore.menu.menuopen);
  return (
    <div>
      <div className={menuoptions ? "block" : "hidden"}>
        <Menu />
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
