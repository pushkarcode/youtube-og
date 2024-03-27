import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = ({ categroy, setCategroy }) => {
  return (
    <div className="flex">
      <Sidebar categroy={categroy} setCategroy={setCategroy} />
      <Outlet />
    </div>
  );
};

export default Body;
