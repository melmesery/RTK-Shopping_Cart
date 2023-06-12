import React, { Fragment } from "react";
import Header from "../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default DefaultLayout;
